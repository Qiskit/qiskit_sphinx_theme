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

import { click, getPosition, setMobile, setDesktop, scrollDown } from "./utils";

// These tests use `getPosition` to get the exact x and y coordinates of HTML elements.
// It's possible we'll make design changes in the future that change those coordinates;
// if so, first check the example docs to make sure they look right, and then update
// the expected coordinates below by using the values from the failed test.
test.describe("Reverted Qiskit top nav bar does not break positioning of", () => {
  test("Furo's menu bars when scrolled down", async ({ page }) => {
    await page.goto("sphinx_guide/lists.html");

    const check = async () => {
      const pageToCPosition = await getPosition(
        page,
        "div.toc-title-container",
      );
      expect(pageToCPosition).toEqual({ x: 1344, y: 0 });

      const leftLogoPosition = await getPosition(page, ".sidebar-brand");
      expect(leftLogoPosition).toEqual({ x: 0, y: 0 });

      await setMobile(page);
      const mobileHeaderPosition = await getPosition(
        page,
        "header.mobile-header",
      );
      expect(mobileHeaderPosition).toEqual({ x: 0, y: 0 });
    };

    // First check after scrolling down a little bit.
    await scrollDown(page, 200);
    await check();

    // Then scroll to the bottom of the page. We use the home page because it's short.
    await setDesktop(page);
    await page.goto("");
    await scrollDown(page, 1000);
    await check();
  });

  test("the top of # anchor links", async ({ page }) => {
    const checkHeader = async (x, y) => {
      await page.goto("sphinx_guide/lists.html#definition-lists");
      const headerPosition = await getPosition(
        page,
        "section#definition-lists > h2",
      );
      expect(headerPosition).toEqual({ x, y });
    };

    await checkHeader(328, 0);

    await setMobile(page);
    // Go to a new page first to reset the scroll state.
    await page.goto("");
    await checkHeader(8, 56);
  });

  test("the side menus when they're expanded on mobile", async ({ page }) => {
    await setMobile(page);
    await page.goto("");

    await click(page, "div.header-right label.toc-overlay-icon i");
    const pageToCPosition = await getPosition(page, "div.toc-title-container");
    expect(pageToCPosition).toEqual({ x: 135, y: 0 });

    // Reload the page to close the nav bar.
    await page.goto("");

    await click(page, "div.header-left i");
    const leftLogoPosition = await getPosition(page, ".sidebar-brand");
    expect(leftLogoPosition).toEqual({ x: 0, y: 0 });
  });
});

test("left side bar renders correctly", async ({ page }) => {
  await page.goto("");
  const leftToC = page.locator(".sidebar-drawer");
  await expect(leftToC).toHaveScreenshot();
});

test("mobile header uses Furo design", async ({ page }) => {
  await setMobile(page);
  await page.goto("");
  const header = page.locator("header.mobile-header");
  await expect(header).toHaveScreenshot();
});

test.describe("colors can be changed", () => {
  test("translations", async ({ page }) => {
    await page.goto("");
    await click(page, "div.qiskit-translations-container i");
    const translations = page.locator("div.qiskit-translations-container");
    await expect(translations).toHaveScreenshot();
  });

  test("footer", async ({ page }) => {
    await page.goto("");

    const yesOption = page.locator("div.qiskit-analytics-container a").first();
    await yesOption.hover();

    const footer = page.locator("footer");
    await expect(footer).toHaveScreenshot();
  });
});
