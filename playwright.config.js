/* This code is a Qiskit project.
 *
 * (C) Copyright IBM 2023.
 *
 * This code is licensed under the Apache License, Version 2.0. You may
 * obtain a copy of this license in the LICENSE.txt file in the root directory
 * of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Any modifications or derivative works of this code must retain this
 * copyright notice, and modified files need to carry a notice indicating
 * that they have been altered from the originals.
 */

import { defineConfig } from "@playwright/test";

const baseURL = "http://127.0.0.1:8080";

export default defineConfig({
  outputDir: "snapshot_results",
  workers: process.env.CI ? 1 : undefined,
  expect: {
    toHaveScreenshot: {
      threshold: 0.01, // We expect colors to be near exact matches.
    },
  },
  use: {
    baseURL,
    viewport: { width: 1920, height: 1080 }, // Sets default viewport to desktop dimensions.
  },
  webServer: {
    command: "npm run start",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
});
