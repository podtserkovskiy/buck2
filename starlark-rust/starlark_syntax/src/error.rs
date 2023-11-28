/*
 * Copyright 2019 The Starlark in Rust Authors.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

use std::fmt;

use crate::codemap::FileSpan;
use crate::diagnostic::diagnostic_display;
use crate::diagnostic::Diagnostic;
use crate::diagnostic::DiagnosticNoError;

/// An error produced by starlark.
///
/// This error is composed of an error kind, together with some diagnostic information indicating
/// where it occurred.
///
/// In order to prevent accidental conversions to `anyhow::Error`, this type intentionally does not
/// implement `std::error::Error`. That should probably change in the future.
#[derive(Debug)]
pub struct Error(Box<ErrorInner>);

impl Error {
    /// The kind of this error
    pub fn kind(&self) -> &ErrorKind {
        &self.0.kind
    }

    /// Convert the error into the underlying kind
    pub fn into_kind(self) -> ErrorKind {
        self.0.kind
    }

    pub fn has_diagnostic(&self) -> bool {
        self.0.diagnostic.is_some()
            || match self.kind() {
                ErrorKind::Other(e) => e.downcast_ref::<Diagnostic>().is_some(),
            }
    }

    /// Convert this error into an `anyhow::Error`
    pub fn into_anyhow(self) -> anyhow::Error {
        struct Wrapped(Error);

        impl fmt::Display for Wrapped {
            fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
                fmt::Display::fmt(&self.0, f)
            }
        }

        impl fmt::Debug for Wrapped {
            fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
                fmt::Debug::fmt(&self.0, f)
            }
        }

        impl std::error::Error for Wrapped {
            fn source(&self) -> Option<&(dyn std::error::Error + 'static)> {
                self.0.kind().source()
            }
        }

        anyhow::Error::new(Wrapped(self))
    }

    /// Gets the diagnostic and the error message.
    ///
    /// The error message does not include the diagnostic
    pub fn get_diagnostic_and_message<'a>(
        &'a self,
    ) -> (
        Option<&'a DiagnosticNoError>,
        impl fmt::Debug + fmt::Display + 'a,
    ) {
        trait DebugAndDisplay: fmt::Debug + fmt::Display {}
        impl<T: fmt::Debug + fmt::Display> DebugAndDisplay for T {}

        match &self.0.kind {
            ErrorKind::Other(e) => {
                if let Some(d) = e.downcast_ref::<Diagnostic>() {
                    return (Some(&d.data), &d.message as &dyn DebugAndDisplay);
                }
            }
        }

        if self.0.diagnostic.is_some() {
            return (
                self.0.diagnostic.as_ref(),
                &self.0.kind as &dyn DebugAndDisplay,
            );
        }

        (None, &self.0.kind as &dyn DebugAndDisplay)
    }

    pub fn span(&self) -> Option<&FileSpan> {
        self.get_diagnostic_and_message()
            .0
            .and_then(|d| d.span.as_ref())
    }
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let (diag, message) = self.get_diagnostic_and_message();
        if let Some(diag) = diag {
            // Not showing the context trace without `{:#}` or `{:?}` is the same thing that anyhow does
            let with_context = f.alternate() && self.0.kind.source().is_some();
            diagnostic_display(message, diag, false, f, with_context)
        } else {
            fmt::Display::fmt(self.kind(), f)
        }
    }
}

#[derive(Debug)]
struct ErrorInner {
    kind: ErrorKind,
    diagnostic: Option<DiagnosticNoError>,
}

/// The different kinds of errors that can be produced by starlark
#[non_exhaustive]
pub enum ErrorKind {
    /// Fallback option
    ///
    /// This is used in two cases:
    ///  1. For errors produced by starlark which have not yet been assigned their own kind
    ///  2. When a native function invoked as a part of starlark evaluation returns a
    ///     `anyhow::Error`
    Other(anyhow::Error),
}

impl ErrorKind {
    /// The source of the error, akin to `[std::error::Error::source]`
    pub fn source(&self) -> Option<&(dyn std::error::Error + 'static)> {
        match self {
            Self::Other(e) => e.source(),
        }
    }
}

impl fmt::Debug for ErrorKind {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Other(e) => fmt::Debug::fmt(e, f),
        }
    }
}

impl fmt::Display for ErrorKind {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Other(e) => fmt::Display::fmt(e, f),
        }
    }
}

impl From<anyhow::Error> for Error {
    fn from(e: anyhow::Error) -> Self {
        Self(Box::new(ErrorInner {
            kind: ErrorKind::Other(e),
            diagnostic: None,
        }))
    }
}