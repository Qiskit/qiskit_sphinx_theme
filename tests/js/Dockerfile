# This code is a Qiskit project.
#
# (C) Copyright IBM 2023.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE.txt file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

# A dockerfile to run our snapshot tests locally. This is to avoid issues with CI and local
# differing. In CI, we also run with the same base image.
# See https://playwright.dev/docs/test-snapshots.
#
# Note that we build the Sphinx docs outside of this Docker image; we only need to run the
# server inside Docker so that the docs are rendered the same locally and in CI.

# Keep this base image in sync with .githug/workflows/main.yml.
FROM mcr.microsoft.com/playwright:v1.34.0-jammy

# Install our dependencies in CI mode so that we error if changes are necessary.
# Users should `npm install` locally if this is the case.
COPY package*.json ./
RUN npm ci

# Copy over only the folders needed for our tests.
COPY playwright.config.js ./
COPY tests/js tests/js
COPY example_docs/docs/_build/html example_docs/docs/_build/html

CMD [ "npm", "run", "_run-snapshot-tests" ]
