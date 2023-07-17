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

import { expect, test } from "@playwright/test";

import { click, setMobile } from "./utils";

test.describe("left side bar", () => {
  test("renders correctly", async ({ page }) => {
    await page.goto("");
    const leftToC = page.locator(".sidebar-drawer");
    await expect(leftToC).toHaveScreenshot();
  });

  test("translations use ecosystem colors", async ({ page }) => {
    await page.goto("");
    await click(page, "div.qiskit-translations-container i");
    const translations = page.locator("div.qiskit-translations-container");
    await expect(translations).toHaveScreenshot();
  });
});

test("mobile header uses Furo design", async ({ page }) => {
  await setMobile(page);
  await page.goto("");
  const header = page.locator("header.mobile-header");
  await expect(header).toHaveScreenshot();
});

test("footer uses ecosystem colors", async ({ page }) => {
  await page.goto("");

  const yesOption = page.locator("div.qiskit-analytics-container a").first();
  await yesOption.hover();

  const footer = page.locator("footer");
  await expect(footer).toHaveScreenshot();
});
