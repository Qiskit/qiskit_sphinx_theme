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

const setDesktop = async (page) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
};

const setMobile = async (page) => {
  await page.setViewportSize({ width: 375, height: 812 });
};

const setTablet = async (page) => {
  await page.setViewportSize({ width: 1280, height: 720 });
};

const click = async (page, selector) => {
  await page.locator(selector).click();
  // Wait for the page to update.
  await page.waitForTimeout(500);
};

const toggleColorTheme = async (page) => {
  if (await page.locator("div.theme-toggle-content button").isVisible()) {
    await click(page, "div.theme-toggle-content button");
  } else if (await page.locator("div.theme-toggle-header button").isVisible()) {
    await click(page, "div.theme-toggle-header button");
  } else {
    throw new Error("Theme toggle button is not visible.")
  }
};

export {
  setDesktop,
  setMobile,
  setTablet,
  click,
  toggleColorTheme,
};
