# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

load("@prelude//utils:set.bzl", "set")
load(
    ":swift_toolchain_types.bzl",
    "SdkCompiledModuleInfo",  # @unused Used as a type
    "SdkDependencyInfo",
    "SdkSwiftOverlayInfo",
    "SwiftToolchainInfo",  # @unused Used as a type
)

def project_as_clang_deps(module_info: SdkCompiledModuleInfo.type):
    if module_info.is_swiftmodule:
        return []
    else:
        return [
            "-Xcc",
            cmd_args(["-fmodule-file=", module_info.module_name, "=", module_info.output_artifact], delimiter = ""),
            "-Xcc",
            cmd_args(["-fmodule-map-file=", module_info.input_relative_path], delimiter = ""),
        ]

SDKDepTSet = transitive_set(args_projections = {
    "clang_deps": project_as_clang_deps,
})

def is_sdk_modules_provided(toolchain: SwiftToolchainInfo.type) -> bool:
    has_swift_modules = bool(toolchain.uncompiled_swift_sdk_modules_deps)
    has_clang_modules = bool(toolchain.uncompiled_clang_sdk_modules_deps)
    return has_swift_modules or has_clang_modules

def get_compiled_sdk_clang_deps_tset(ctx: AnalysisContext, deps_providers: list) -> SDKDepTSet.type:
    sdk_deps = [
        deps_provider[SdkDependencyInfo].clang_deps
        for deps_provider in deps_providers
        if SdkDependencyInfo in deps_provider
        if deps_provider[SdkDependencyInfo].clang_deps != None
    ]
    return ctx.actions.tset(SDKDepTSet, children = sdk_deps)

def get_compiled_sdk_swift_deps_tset(ctx: AnalysisContext, deps_providers: list) -> SDKDepTSet.type:
    sdk_deps = [
        deps_provider[SdkDependencyInfo].swift_deps
        for deps_provider in deps_providers
        if SdkDependencyInfo in deps_provider
        if deps_provider[SdkDependencyInfo].swift_deps != None
    ]
    return ctx.actions.tset(SDKDepTSet, children = sdk_deps)

def get_uncompiled_sdk_deps(
        sdk_modules: list[str],
        required_modules: list[str],
        toolchain: SwiftToolchainInfo.type) -> list[Dependency]:
    if not is_sdk_modules_provided(toolchain):
        fail("SDK deps are not set for swift_toolchain")

    all_sdk_modules = sdk_modules + required_modules
    all_sdk_modules = set(all_sdk_modules)

    sdk_deps = []
    sdk_overlays = []

    def process_sdk_module_dep(dep_name, uncompiled_sdk_modules_map):
        if dep_name not in uncompiled_sdk_modules_map:
            return

        sdk_dep = uncompiled_sdk_modules_map[dep_name]
        sdk_deps.append(sdk_dep)

        if SdkSwiftOverlayInfo not in sdk_dep:
            return

        overlay_info = sdk_dep[SdkSwiftOverlayInfo]
        for underlying_module, overlay_modules in overlay_info.overlays.items():
            # Only add a cross import SDK overlay if both modules associated with the overlay are required
            if all_sdk_modules.contains(underlying_module):
                # Cross import overlays themselves are always Swift modules, but the underlying module
                # can be a Swift module or a Clang module
                sdk_overlays.extend([toolchain.uncompiled_swift_sdk_modules_deps[overlay_name] for overlay_name in overlay_modules if overlay_name in toolchain.uncompiled_swift_sdk_modules_deps])

    for sdk_module_dep_name in all_sdk_modules.list():
        process_sdk_module_dep(sdk_module_dep_name, toolchain.uncompiled_swift_sdk_modules_deps)
        process_sdk_module_dep(sdk_module_dep_name, toolchain.uncompiled_clang_sdk_modules_deps)

    return sdk_deps + sdk_overlays
