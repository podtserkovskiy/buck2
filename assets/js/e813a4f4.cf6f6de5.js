"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[850],{3905:(e,n,i)=>{i.r(n),i.d(n,{MDXContext:()=>d,MDXProvider:()=>f,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>m});var o=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},a.apply(this,arguments)}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,o,t=function(e,n){if(null==e)return{};var i,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var d=o.createContext({}),m=function(e){return function(n){var i=p(n.components);return o.createElement(e,a({},n,{components:i}))}},p=function(e){var n=o.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},f=function(e){var n=p(e.components);return o.createElement(d.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(i),f=t,c=m["".concat(r,".").concat(f)]||m[f]||u[f]||a;return i?o.createElement(c,s(s({ref:n},d),{},{components:i})):o.createElement(c,s({ref:n},d))}));function h(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,r=new Array(a);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:t,r[1]=s;for(var d=2;d<a;d++)r[d]=i[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}g.displayName="MDXCreateElement"},3216:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=i(87462),t=(i(67294),i(3905));const a={},r="[RFC] Configuration Modifiers",s={unversionedId:"rfcs/cfg-modifiers/api",id:"rfcs/cfg-modifiers/api",title:"[RFC] Configuration Modifiers",description:"Why do we need new configuration setup?",source:"@site/../docs/rfcs/cfg-modifiers/api.md",sourceDirName:"rfcs/cfg-modifiers",slug:"/rfcs/cfg-modifiers/api",permalink:"/docs/rfcs/cfg-modifiers/api",draft:!1,tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Why do we need new configuration setup?",id:"why-do-we-need-new-configuration-setup",level:2},{value:"Configuration Background",id:"configuration-background",level:2},{value:"API",id:"api",level:2},{value:"PACKAGE Modifier",id:"package-modifier",level:3},{value:"Target Modifier",id:"target-modifier",level:3},{value:"CLI Modifier",id:"cli-modifier",level:3},{value:"Modifier Resolution",id:"modifier-resolution",level:3},{value:"Conditional Modifiers",id:"conditional-modifiers",level:3},{value:"Legacy Target platform",id:"legacy-target-platform",level:3},{value:"Debugging modifiers",id:"debugging-modifiers",level:2},{value:"How configuration modifiers differ from transitions",id:"how-configuration-modifiers-differ-from-transitions",level:2}],m={toc:d};function p(e){let{components:n,...i}=e;return(0,t.mdx)("wrapper",(0,o.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"rfc-configuration-modifiers"},"[RFC]"," Configuration Modifiers"),(0,t.mdx)("h2",{id:"why-do-we-need-new-configuration-setup"},"Why do we need new configuration setup?"),(0,t.mdx)("p",null,"A target usually needs to be built in multiple build settings. For example,\nthere may be different OS (ex. linux, mac, windows), architectures (ex. x86,\narm), and sanitizers (ex. asan, tsan, ubsan) to use for a single target. Buck\nhas 2 main ways of supporting customizations today:"),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},"Buckconfigs specified through ",(0,t.mdx)("inlineCode",{parentName:"li"},"--config")," or ",(0,t.mdx)("inlineCode",{parentName:"li"},"-c")," flags. They are global flags\nand are often aggregated in modefiles (",(0,t.mdx)("inlineCode",{parentName:"li"},"@<modefile>")," on the command line)."),(0,t.mdx)("li",{parentName:"ol"},"Target platforms specified through ",(0,t.mdx)("inlineCode",{parentName:"li"},"default_target_platform")," attribute or\n",(0,t.mdx)("inlineCode",{parentName:"li"},"--target-platforms"),' flag), which become a target\'s "configuration".\n',(0,t.mdx)("inlineCode",{parentName:"li"},"--target-platforms")," flags are also commonly specified via modefiles.")),(0,t.mdx)("p",null,"These methods are problematic for the following reasons."),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("em",{parentName:"p"},"We have too many modefiles"),". A project that needs customizations often ends\nup adding its own set of modefiles, causing a continued rise in number of\ncustom modefiles in the repo. Internally, the number of modefiles in our\nmonorepo is currently on the order of ",(0,t.mdx)("strong",{parentName:"p"},"10,000s"),".")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("em",{parentName:"p"},"Changing buckconfigs invalidates Buck's state"),". Changing buckconfigs or\nmodefiles of buckconfigs invalidates global state, which adds non-trivial\nBuck overhead on every incremental build that changes state. This does not\naffect target platforms.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("em",{parentName:"p"},"Different modefiles of buckconfigs cannot be used in same build"),". Users that\nneed to run multi-configuration builds today often work around this by\nwriting scripts that wraps multiple buck build invocations of different\nmodes. This is slow because Buck state keeps getting repeatedly invalidated.\nThere is also no way to build a target in different modes (ex. dev and opt)\nat the same time, so users that need to do this always have to do this\nsequentially. This does not affect target platforms.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("em",{parentName:"p"},"Target platform generation is exponential in number of build settings"),".\nSuppose I want to customize targets based on 3 OSes, 2 architectures, and 3\ncompilers. With target platforms, I need to first generate all 18\npermutations of these settings as platform targets before using them. This is\nnot scalable.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("em",{parentName:"p"},"Target platform does not compose well on command line"),". Suppose I want to\nuse ASAN on top of some existing platform. It's not possible to say specify\nASAN on top of an existing platform on the command line. Instead, I must\ncreate a new platform target with ASAN added to the existing platform before\nI can use it.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("em",{parentName:"p"},"Poor user Experience"),". When every project needs its own set of modes, it's\nonerous for users to track what modes are needed to build what targets. Users\noften don't realize when they are using the wrong or unnecessary command line\nflags.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("em",{parentName:"p"},"Poor tooling integration"),". Similar to user, it's just onerous for tooling to\nkeep track of what modes are needed to build a target with. Buckconfigs are\nalso bad for performance for tools like language servers because it's\nimpossible to request the builds of two modes in parallel when two targets\nneeds different modes.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("em",{parentName:"p"},"Antithetical to Buck's principles"),". Buck's main strength is the ability to\nabstract away builds of different languages and libraries under one common\nsyntax for the user. The need for project-custom flags goes against this\nprinciple."))),(0,t.mdx)("p",null,"The Modifier API introduces a unified way to specify build settings on a\nproject, target, and command line level. Like target platforms, it constructs\nBuck configurations so it supports multi-configuration builds. It avoids\nmodefile proliferation by allowing users to easily set project-specific build\nsettings like compiler and toolchain versions in the repo rather than on the\ncommand line. It avoids scalability problems of platform generation by being\ncomposition-first. The goals of this project is to:"),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("em",{parentName:"li"},"Make ",(0,t.mdx)("inlineCode",{parentName:"em"},"buck build")," work on any platform without the use of special flags"),".\nToday, building a mac target on mac often requires a mac mode, and likewise\nfor windows. Instead, ",(0,t.mdx)("inlineCode",{parentName:"li"},"buck build")," should always work out of the box on any\nplatform so that there's no need to specify mac mode on macs or windows mode\non windows."),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("em",{parentName:"li"},"Define a small constrained set of common modifiers that can be used to build\nany target in the repo"),". This will include common options like mode (ex. dev,\nopt, release), OS (ex. linux, mac, iphoneos), and architecture (ex. x86,\narm)."),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("em",{parentName:"li"},"Unblock cross-building for the majority of targets"),". ",(0,t.mdx)("inlineCode",{parentName:"li"},"host_info()"),' is a hack\nto obtain information about the host machine that is the main blocker to\nBuck2 cross-building (ex. building a mac or windows target from linux)\nworking everywhere. As an extension of "making ',(0,t.mdx)("inlineCode",{parentName:"li"},"buck build"),' work on any\nplatform", modifiers should make it possible to kill off most use cases of\n',(0,t.mdx)("inlineCode",{parentName:"li"},"host_info")," in the repo."),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("em",{parentName:"li"},"Simplify building build tooling"),". Because ",(0,t.mdx)("inlineCode",{parentName:"li"},"buck build")," works out of the box,\ntools like language servers can build targets they need without using\nproject-specific modefiles or flags."),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("em",{parentName:"li"},"Delete most modefiles from the repo"),"."),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("em",{parentName:"li"},"Deprecate target platforms for modifiers as the sole way of configuring\ntop-level targets in Buck"),".")),(0,t.mdx)("h2",{id:"configuration-background"},"Configuration Background"),(0,t.mdx)("p",null,(0,t.mdx)("em",{parentName:"p"},"Feel free to skip this if you already understand Buck configurations.")),(0,t.mdx)("p",null,"A configuration is a collection of ",(0,t.mdx)("inlineCode",{parentName:"p"},"constraint_value")," targets (commonly referred\nto as constraints). It defines the build settings used by a target. A constraint\nvalue is keyed by a ",(0,t.mdx)("inlineCode",{parentName:"p"},"constraint_setting"),", so there can only be one\n",(0,t.mdx)("inlineCode",{parentName:"p"},"constraint_value")," of a ",(0,t.mdx)("inlineCode",{parentName:"p"},"constraint_setting")," in a configuration."),(0,t.mdx)("p",null,"For example, suppose ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:_")," is a constraint setting with constraint values\n",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:linux"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:macos"),", and ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:windows"),". Then a configuration\nmay contain either ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:linux"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:macos"),", or ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:windows")," to\nindicate which OS a target is built for."),(0,t.mdx)("p",null,"A constraint or a set of constraints can be selected on via ",(0,t.mdx)("inlineCode",{parentName:"p"},"select()")," to\ncustomize a target's behavior. For example, the following adds a linux only dep\nto a target."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-python"},'deps = select({\n  "cfg//os:linux": [":linux_only_dep"],\n  "DEFAULT": [],\n})\n')),(0,t.mdx)("p",null,"Before building a target on the command line (known as the top-level target),\nBuck needs to know its configuration in order to resolve selects. Modifiers are\na new way to resolve a target's configuration for every top-level target."),(0,t.mdx)("h2",{id:"api"},"API"),(0,t.mdx)("p",null,'Every top-level target starts with an empty configuration, and Buck will apply a\nlist of "modifiers" to obtain a configuration. A modifier is a modification of a\nconstraint from the existing configuration to obtain a new configuration. There\nare two types of modifiers, ',(0,t.mdx)("em",{parentName:"p"},"conditional")," and ",(0,t.mdx)("em",{parentName:"p"},"unconditional")," modifiers."),(0,t.mdx)("p",null,"An unconditional modifier is just a constraint value. Applying an unconditional\nmodifier will insert the associated constraint value into the configuration for\nits respective constraint setting, replacing any existing constraint value for\nthat setting. For example, specifying ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:linux")," as a modifier will insert\n",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:linux")," into the configuration, overriding any existing constraint value\nfor the ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:_")," constraint setting."),(0,t.mdx)("p",null,"A conditional modifier is a modifier that only applies when a certain condition\nis satisfied. This lets one express powerful composition based on other\ncriteria. ",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match()")," is a conditional modifier that changes the\nconstraint value inserted based on the existing configuration. For example, a\nmodifier like"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-python"},'modifiers.match({\n  "cfg//os:windows": "cfg//compiler:msvc",\n  "DEFAULT": "cfg//compiler:clang",\n})\n')),(0,t.mdx)("p",null,"will insert msvc constraint into the configuration if OS is windows or clang\nconstraint otherwise. A ",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match()")," behaves similarly to Buck's\n",(0,t.mdx)("inlineCode",{parentName:"p"},"select()")," but can only be used in a modifier context. A ",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match()")," can\nonly be used to modify a single constraint setting, so the following example is\nnot valid."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-python"},'# This fails because a modifier cannot modify both compiler and OS.\nmodifiers.match({\n  "cfg//os:windows": "cfg//compiler:msvc",\n  "DEFAULT": "cfg//os:linux",\n})\n')),(0,t.mdx)("p",null,"A modifier can be specified in a PACKAGE file, on a target, or on the command\nline. This provides the flexibility needed to customize targets on a project,\ntarget, or cli level."),(0,t.mdx)("h3",{id:"package-modifier"},"PACKAGE Modifier"),(0,t.mdx)("p",null,"In a PACKAGE file, modifiers can be specified using the ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg_modifiers")," function\nand would apply to all targets covered under that PACKAGE. For example,\nmodifiers specified in ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo/PACKAGE")," would apply to any target under\n",(0,t.mdx)("inlineCode",{parentName:"p"},"repo//..."),". Modifiers specified in ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo/foo/PACKAGE")," would apply to any target\nunder ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo//foo/..."),' (For resolution order, see "Modifier Resolution" section).'),(0,t.mdx)("p",null,"The ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg_modifiers")," function takes as input a dictionary of constraint setting\nto modifier for that setting. For example, the following is an example that sets\nmodifiers for OS and compiler settings in the repo's top PACKAGE file for all\ntargets in repo."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-python"},'# repo/PACKAGE\n\nset_cfg_modifiers(modifiers = [\n  "cfg//:linux",\n  modifiers.match({\n    "DEFAULT": "cfg//compiler:clang",\n    "cfg//os:windows": "cfg//compiler:msvc",\n  }),\n])\n')),(0,t.mdx)("p",null,"To make constraints easier to type, you can specify aliases for modifier targets\nvia Buck's target aliases."),(0,t.mdx)("p",null,"For example, suppose the following aliases exist in ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo/.buckconfig"),"."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-ini"},"[alias]\n  os = cfg//os:_\n  linux = cfg//os:linux\n  macos = cfg//os:macos\n  windows = cfg//os:windows\n  compiler = cfg//compiler:_\n  clang = cfg//compiler:clang\n  msvc = cfg//compiler:msvc\n")),(0,t.mdx)("p",null,"Then the same PACKAGE modifiers can be specified as follows."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-python"},'# repo/PACKAGE\n\nset_cfg_modifiers(modifiers = [\n  "linux",\n  modifiers.match({\n    "DEFAULT": "clang",\n    "windows": "msvc",\n  }),\n})\n')),(0,t.mdx)("h3",{id:"target-modifier"},"Target Modifier"),(0,t.mdx)("p",null,"On a target, modifiers can be specified on the ",(0,t.mdx)("inlineCode",{parentName:"p"},"metadata")," attribute. For\nexample, the following specifies modifiers for ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo//foo:bar"),"."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-python"},'# repo/foo/BUCK\n\npython_binary(\n  name = "bar",\n  # ...\n  metadata = {"buck.cfg_modifiers": [\n    "cfg//os:windows",\n    # Target modifiers can also use aliases\n    "clang",\n  ]},\n)\n')),(0,t.mdx)("p",null,"Note one day all targets will probably have their own ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg_modifiers")," attribute."),(0,t.mdx)("h3",{id:"cli-modifier"},"CLI Modifier"),(0,t.mdx)("p",null,"On the command line, modifiers are specified as\n",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build <target>?<modifiers separated by commas>"),"."),(0,t.mdx)("p",null,"For example, ",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo:bar?cfg//sanitizer:asan")," applies asan\nmodifier on the command line.\n",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo:bar?cfg//os:linux,cfg//sanitizer:asan")," will apply linux\nand asan modifiers. Aliases can also be used on command line, so\n",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo:bar?asan")," is valid."),(0,t.mdx)("p",null,"Command line modifiers cannot be selects, although this may be revisited if\nnecessary."),(0,t.mdx)("p",null,"Modifiers can be specified for any target pattern, so\n",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo/...?asan")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo:?asan")," are also\nvalid. When specifying a subtarget and modifier with ",(0,t.mdx)("inlineCode",{parentName:"p"},"?"),", subtarget should go\nbefore modifier, ex. ",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo:bar[comp-db]?asan"),"."),(0,t.mdx)("p",null,"To specify modifiers to a list of target patterns on the command line, you can\nuse the ",(0,t.mdx)("inlineCode",{parentName:"p"},"--modifier")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"-m")," flag. For example,\n",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo:bar repo//foo:baz -m release")," is equivalent to\n",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo:bar?release //foo:baz?release"),"."),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"--modifier")," flag can be specified multiple times to add multiple modifier, so\n",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build --modifier=linux --modifier=release repo//foo:bar")," is equivalent to\n",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo:bar?linux,release"),"."),(0,t.mdx)("p",null,"It is prohibited to specify both ",(0,t.mdx)("inlineCode",{parentName:"p"},"--modifier")," flag and ",(0,t.mdx)("inlineCode",{parentName:"p"},"?")," in target pattern.\nThis restriction can be lifted in the future if there is a need."),(0,t.mdx)("p",null,"When two modifiers of the same constraint setting are specified, then the later\none overrides the earlier one. For example,\n",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo:bar?dev,release")," is equivalent to\n",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 build repo//foo:bar?release"),"."),(0,t.mdx)("p",null,"On command line, a ",(0,t.mdx)("inlineCode",{parentName:"p"},"config_setting")," target can be specified as a collection of\nmodifiers after ",(0,t.mdx)("inlineCode",{parentName:"p"},"--modifier")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"?"),". This will be equivalent to specifying each\nconstraint inside the ",(0,t.mdx)("inlineCode",{parentName:"p"},"config_setting")," as a separate modifier."),(0,t.mdx)("h3",{id:"modifier-resolution"},"Modifier Resolution"),(0,t.mdx)("p",null,"Modifiers are resolved in order of constraint setting, and for each constraint\nsetting, modifiers for that setting are resolved in order of PACKAGE, target,\nand command line, with modifier from parent PACKAGE applied before child\nPACKAGE. The end of this section will describe how Buck determines the order of\nconstraint setting to resolve."),(0,t.mdx)("p",null,"Suppose modifiers for ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo//foo:bar")," are specified as follows."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-python"},'# repo/PACKAGE\n\nset_cfg_modifiers(modifiers = [\n  "cfg//:linux",\n  modifiers.match({\n    "DEFAULT": "cfg//compiler:clang",\n    "cfg//os:windows": "cfg//compiler:msvc",\n  }),\n])\n\n# repo/foo/PACKAGE\n\nset_cfg_modifiers(modifiers = ["cfg//os:macos"])\n\n# repo/foo/BUCK\n\npython_binary(\n  name = "bar",\n  # ...\n  metadata = {"buck.cfg_modifiers": ["cfg//os:windows"]},\n)\n')),(0,t.mdx)("p",null,"At the beginning, the configuration will be empty. When resolving modifiers,\nBuck will first resolve all modifiers for ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:_")," before resolving all\nmodifiers for ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//compiler:_"),"."),(0,t.mdx)("p",null,"For OS, the linux modifier from ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo/PACKAGE")," will apply first, followed by\nmacos modifier from ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo/foo/PACKAGE")," and windows modifier from\n",(0,t.mdx)("inlineCode",{parentName:"p"},"repo//foo:bar"),"'s target modifiers, so ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo//foo:bar")," will end up with\n",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:windows")," for ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//os:_")," in its configuration. Next, to resolve\ncompiler modifier, the ",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match")," from ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo/PACKAGE")," will resolve to\n",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//compiler:msvc")," since existing configuration is windows and apply that as\nthe modifier. The target configuration for ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo//foo:bar")," ends up with windows\nand msvc."),(0,t.mdx)("p",null,"However, suppose user invokes ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo//foo:bar?linux")," on the command line. When\nresolving OS modifier, the linux modifier from cli will override any existing OS\nconstraint and insert linux into the configuraiton. Then, when resolving the\ncompiler modifier, the ",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match")," will resolve to ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//compiler:clang"),",\ngiving clang and linux as the final configuration."),(0,t.mdx)("p",null,"Because command line modifiers will apply at the end, they are also known as\nrequired modifiers. Any modifier specified on the command line will always\noverride any modifier for the same constraint setting specified in the repo."),(0,t.mdx)("p",null,"The ordering of constraint setting to resolve modifiers is determined based on\ndependency order of constraints specified in the keys of the ",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match"),"\nspecified. Because some modifiers match on other constraints, modifiers for\nthose constraints must be resolved first. In the previous example, because\ncompiler modifier matches on OS constraints, Buck will resolve all OS modifiers\nbefore resolving compiler modifiers. ",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match")," that ends up with a cycle\nof matched constraints (ex. compiler modifier matches on sanitizer but sanitizer\nmodifier also matches on compiler) will be an error."),(0,t.mdx)("h3",{id:"conditional-modifiers"},"Conditional Modifiers"),(0,t.mdx)("p",null,"Modifiers have 3 types of conditional modifiers that allow for powerful\ncompositions. Each operator is a function that accepts a dictionary where the\nkeys are the conditionals and values are modifiers."),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match"),". Introduced in the previous sections, this is capable of\ninserting constraints based on constraints in the existing configuration.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match_rule"),'. This is capable of selecting based on the rule name\n(also known as rule type). The keys are regex patterns to match against the\nrule name or "DEFAULT". Partial matches are allowed.')),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match_host"),". This selects based on the host configuration, whereas\n",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match")," selects based on the target configuration. This host\nconfiguration is constructed when resolving modifiers. ",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match_host"),"\nis important to making ",(0,t.mdx)("inlineCode",{parentName:"p"},"buck build")," work anywhere on any platform. For\nexample, when the OS to configure is not specified, it's best to assume that\nthe user wants to target the same OS as the host machine."))),(0,t.mdx)("p",null,"An example using ",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match_rule")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"modifiers.match_host")," is as\nfollows."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-python"},'# root/PACKAGE\n\n# We want OS to target the host machine by default.\n# Ex. build linux on linux machine, build windows on windows machine,\n# and build mac on mac machine.\n# However, if the rule is apple or android specific, then we should\n# always be building for apple/android as OS, no matter the host\n# configuration.\n\nset_cfg_modifiers(modifiers = [\n  modifiers.match_rule({\n    "apple_.*": "cfg//os:iphone",\n    "android_.*": "cfg//os:android",\n    "DEFAULT": host_select({\n      "cfg//os:linux": "cfg//os:linux",\n      "cfg//os:macos": "cfg//os:macos",\n      "cfg//os:windows": "cfg//os:windows",\n    }),\n  }),\n])\n')),(0,t.mdx)("p",null,"On select resolution, Buck's ",(0,t.mdx)("inlineCode",{parentName:"p"},"select"),' currently requires unambiguous keys in the\ndictionary and resolves to the key with the most refined match. The select\noperators used in modifiers will diverge from this and implement a "first-match"\nbehavior, where select resolves to the first condition that evalutes to true in\nthe dictionary.'),(0,t.mdx)("h3",{id:"legacy-target-platform"},"Legacy Target platform"),(0,t.mdx)("p",null,"Target platform (",(0,t.mdx)("inlineCode",{parentName:"p"},"--target-platforms")," flag or ",(0,t.mdx)("inlineCode",{parentName:"p"},"default_target_platform"),"\nattribute) will be a deprecated way of specifying configuration and will be\nkilled once all use cases migrate to modifiers. To maintain backwards\ncompatibility with target platforms during the migration process, modifier\nresolution will take into account the target platform specified. This allows for\nan easy migration where modifiers can be introduced one at a time without\nreaching feature parity of target platform."),(0,t.mdx)("p",null,"If a target's modifiers resolve to an empty configuration, then Buck will reuse\nthe target platform as the configuration. If modifiers resolve to a non-empty\nconfiguration, then Buck look for any constraint in the target platform not\ncovered by a constraint setting from the modifier configuration and add those to\nthe configuration. For example, suppose in the previous example, the target\nplatform for ",(0,t.mdx)("inlineCode",{parentName:"p"},"repo// foo:bar")," includes ",(0,t.mdx)("inlineCode",{parentName:"p"},"cfg//sanitizer:asan"),", then this\nconstraint will be inserted into the configuration since no modifier covered the\nsanitizer constraint setting."),(0,t.mdx)("h2",{id:"debugging-modifiers"},"Debugging modifiers"),(0,t.mdx)("p",null,"Because many layers of modifiers can be applied before obtaining a final\nconfiguration, it is important that modifier resolution is easy to debug and\nunderstand. Here are some ways that modifier resolution can be interpreted."),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("em",{parentName:"p"},(0,t.mdx)("inlineCode",{parentName:"em"},"buck2 audit modifiers")," command"),". There will be a ",(0,t.mdx)("inlineCode",{parentName:"p"},"buck2 audit modifiers"),"\ncommand to show all PACKAGE, target, and required modifiers for a target. It\ncan also show configuration changes from modifier resolution process if\nrequested by the user.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("em",{parentName:"p"},"Starlark print statements or debugger"),". Modifier resolution process will be\nimplemented in Starlark in prelude. This means that any user can use any of\nthe existing way to debug starlark (ex. print statements, Starlark debugger\nin VSCode) to debug the resolution process."))),(0,t.mdx)("h2",{id:"how-configuration-modifiers-differ-from-transitions"},"How configuration modifiers differ from transitions"),(0,t.mdx)("p",null,"Modifiers are largely inspired by configuration transitions. The difference\nbetween modifier and transition is that a transition can change the\nconfiguration of any target in the graph, but a modifier can only change the\nconfiguration of a top-level target. In other words, if you have target A that\ndepends on target B and you request a build of A, then A's target configuration\nwould be resolved via modifiers and propagated down to B, but dep B would not do\nits own modifier resolution. When a top-level target goes through a per-rule\ntransition, that transition is applied after modifiers are resolved."),(0,t.mdx)("p",null,"Below are some examples that show when to use modifier and when to use\ntransition."),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("em",{parentName:"li"},"Python version")," should be modeled as a transition and not modifier. Suppose\nwe have ",(0,t.mdx)("inlineCode",{parentName:"li"},"python_binary")," A nested as a resource of another ",(0,t.mdx)("inlineCode",{parentName:"li"},"python_binary")," B.\nA should not inherit the python version from B, so a transition is needed to\nchange A's python version when depended on by B."),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("em",{parentName:"li"},"Library target")," should use modifiers and not transitions. A C++ library\ntarget should always inherit the configuration of its parent C++ binary when\nit is used as a dep, but a top-level C++ library target can still have its\nconfiguration changed via modifiers when requested from command line.")),(0,t.mdx)("p",null,"In the future, we may add support for modifier transition, which can transition\nvia modifiers, but that is out of the scope of this RFC."))}p.isMDXComponent=!0}}]);