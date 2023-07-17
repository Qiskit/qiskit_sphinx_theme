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

let testMatch;
let baseURL;
let startCommand;
if (process.env.THEME === "qiskit") {
  testMatch = /.*qiskit.test.js/;
  baseURL = "http://127.0.0.1:8080";
  startCommand = "start-qiskit";
} else {
  testMatch = /.*ecosystem.test.js/;
  baseURL = "http://127.0.0.1:8081";
  startCommand = "start-ecosystem";
}

export default defineConfig({
  outputDir: "snapshot_results",
  workers: process.env.CI ? 1 : undefined,
  testMatch,
  expect: {
    toHaveScreenshot: {
      threshold: 0.01, // We expect colors to be near exact matches.
    },
  },
  use: {
    baseURL,
    // Sets default viewport to desktop dimensions.
    viewport: { width: 1920, height: 1080 },
  },
  webServer: {
    command: `npm run ${startCommand}`,
    url: baseURL,
  },
});
