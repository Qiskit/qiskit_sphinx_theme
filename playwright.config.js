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
