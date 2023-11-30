/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

#![feature(async_closure)]

pub mod file_names;
pub mod read;
pub mod stream_value;
pub mod user_event_types;
pub mod utils;
pub mod write;

use std::io;
use std::process;
use std::time::Duration;

use anyhow::Context as _;
use buck2_core::env_helper::EnvHelper;
use buck2_core::sandcastle::is_sandcastle;
use tokio::process::Child;
use tokio::task::JoinHandle;

pub fn should_upload_log() -> anyhow::Result<bool> {
    if buck2_core::is_open_source() {
        return Ok(false);
    }
    static DISABLE_LOG_UPLOAD: EnvHelper<bool> = EnvHelper::new("BUCK2_TEST_DISABLE_LOG_UPLOAD");
    Ok(!DISABLE_LOG_UPLOAD.get()?.copied().unwrap_or_default())
}

pub fn should_block_on_log_upload() -> anyhow::Result<bool> {
    // Used by our tests.
    static TEST_BLOCK_ON_UPLOAD: EnvHelper<bool> = EnvHelper::new("BUCK2_TEST_BLOCK_ON_UPLOAD");

    Ok(is_sandcastle()? || TEST_BLOCK_ON_UPLOAD.get_copied()?.unwrap_or_default())
}

/// Wait for the child to finish. Assume its stderr was piped.
pub async fn wait_for_child_and_log(child: FutureChildOutput, reason: &str) {
    async fn inner(child: FutureChildOutput) -> anyhow::Result<()> {
        let res = tokio::time::timeout(Duration::from_secs(20), child.task)
            .await
            .context("Timed out")?
            .context("Task failed")?
            .context("Process failed")?;

        if !res.status.success() {
            let stderr = String::from_utf8_lossy(&res.stderr);
            return Err(anyhow::anyhow!(
                "Upload exited with status `{}`. Stderr: `{}`",
                res.status,
                stderr.trim(),
            ));
        };
        Ok(())
    }

    match inner(child).await {
        Ok(_) => {}
        Err(e) => {
            tracing::warn!("Error uploading {}: {:#}", reason, e);
        }
    }
}

/// Ensure that if we spawn children, we don't block their stderr.
pub struct FutureChildOutput {
    task: JoinHandle<io::Result<process::Output>>,
}

impl FutureChildOutput {
    pub fn new(child: Child) -> Self {
        Self {
            task: tokio::task::spawn(async move { child.wait_with_output().await }),
        }
    }
}