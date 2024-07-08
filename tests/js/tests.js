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

import { click, setMobile, setTablet, toggleColorTheme } from "./utils";

test.describe("top nav bar dark mode cycle", () => {
  test("uses custom page ToC icon on tablet", async ({ page }) => {
    await setTablet(page);
    await page.goto("sphinx_guide/lists.html");
    const pageToC = page.locator("div.content-icon-container");
    await expect(pageToC).toHaveScreenshot();
    await toggleColorTheme(page);
    await expect(pageToC).toHaveScreenshot();
    await toggleColorTheme(page);
    await expect(pageToC).toHaveScreenshot();
    await toggleColorTheme(page);
    await expect(pageToC).toHaveScreenshot();
  });

  test("uses custom icons on mobile", async ({ page }) => {
    await setMobile(page);
    await page.goto("sphinx_guide/lists.html");
    const header = page.locator("header.mobile-header");
    await expect(header).toHaveScreenshot();
    await toggleColorTheme(page);
    await expect(header).toHaveScreenshot();
    await toggleColorTheme(page);
    await expect(header).toHaveScreenshot();
    await toggleColorTheme(page);
    await expect(header).toHaveScreenshot();
  });
});

for (const colorScheme of ["light", "dark"]) {
  test.describe(`${colorScheme} mode`, () => {
    test.beforeEach(async ({ page }) => {
      if (colorScheme === "dark") {
        await page.goto("");
        await toggleColorTheme(page);
      }
    });

    test.describe("top nav bar", () => {
      test("uses custom page ToC icon on tablet", async ({ page }) => {
        await setTablet(page);
        await page.goto("sphinx_guide/lists.html");
        const pageToC = page.locator("div.content-icon-container");
        await expect(pageToC).toHaveScreenshot();
      });

      test("uses custom icons on mobile", async ({ page }) => {
        await setMobile(page);
        await page.goto("sphinx_guide/lists.html");
        const header = page.locator("header.mobile-header");
        await expect(header).toHaveScreenshot();
      });
    });

    test("right side bar is not broken by our page layout", async ({
      page,
    }) => {
      // We intentionally use a short page to keep the screenshot shorter.
      await page.goto("sphinx_guide/notebook.html");
      const tocDrawer = page.locator(".toc-drawer");
      await expect(tocDrawer).toHaveScreenshot();
    });

    test.describe("left side bar", () => {
      test("renders correctly", async ({ page }) => {
        // Go to a top-level page so that we can see how the expanded side bar looks.
        await page.goto("apidoc/module.html");
        const leftToC = page.locator(".sidebar-drawer");
        await expect(leftToC).toHaveScreenshot();
      });

      test("translations are expandable", async ({ page }) => {
        await page.goto("");
        await click(page, "div.qiskit-translations-container i");
        const translations = page.locator("div.qiskit-translations-container");
        await expect(translations).toHaveScreenshot();
      });

      test("previous releases are expandable", async ({ page }) => {
        await page.goto("");
        await click(page, "div.qiskit-previous-releases-container i");
        const previousReleases = page.locator(
          "div.qiskit-previous-releases-container"
        );
        await expect(previousReleases).toHaveScreenshot();
      });
    });

    test.describe("api docs", () => {
      test("module page", async ({ page }) => {
        await page.goto("apidoc/module.html");
        const content = page.locator("div.article-container");
        await expect(content).toHaveScreenshot();
      });

      test("class page", async ({ page }) => {
        await page.goto("stubs/api_example.Electron.html");
        const content = page.locator("div.article-container");
        await expect(content).toHaveScreenshot();
      });

      test("function page", async ({ page }) => {
        await page.goto("stubs/api_example.my_function1.html");
        const content = page.locator("div.article-container");
        await expect(content).toHaveScreenshot();
      });

      test("inline classes", async ({ page }) => {
        await page.goto("apidoc/inline_classes.html");
        const content = page.locator("div.article-container");
        await expect(content).toHaveScreenshot();
      });
    });

    test("tables align with qiskit", async ({ page }) => {
      await page.goto("sphinx_guide/tables.html");
      const gridTablesSection = page.locator("section#grid-tables");
      await expect(gridTablesSection).toHaveScreenshot();
    });

    test("tutorials do not have purple border", async ({ page }) => {
      await page.goto("sphinx_guide/notebook_gallery.html");
      const tutorial = page.locator("div.nbsphinx-gallery");
      await expect(tutorial).toHaveScreenshot();
    });

    test("admonitions use Carbon style", async ({ page }) => {
      await page.goto("sphinx_guide/paragraph.html#admonitions");
      const admonitions = page.locator("section#admonitions");
      await expect(admonitions).toHaveScreenshot();
    });

    test("deprecations look like warning", async ({ page }) => {
      await page.goto("sphinx_guide/paragraph.html#deprecation-note");
      const deprecations = page.locator("section#deprecation-note");
      await expect(deprecations).toHaveScreenshot();
    });

    test("Sphinx Design elements have no shadows", async ({ page }) => {
      await page.goto("sphinx_guide/panels.html");
      await page.locator(".sd-dropdown").first().click();
      const pageContents = page.locator("section#panels");
      await expect(pageContents).toHaveScreenshot();
    });

    test("Jupyter works with copybutton", async ({ page }) => {
      // Regression test of https://github.com/Qiskit/qiskit_sphinx_theme/issues/306.
      await page.goto("sphinx_guide/jupyter.html");
      const pageContents = page.locator("section#jupyter");
      await expect(pageContents).toHaveScreenshot();
    });

    test("custom directives", async ({ page }) => {
      await page.goto("sphinx_guide/custom_directives.html");

      const cards = page.locator("section#qiskit-card");
      await cards.hover();
      await expect(cards).toHaveScreenshot();

      const callToActions = page.locator("section#qiskit-call-to-action-item");
      await expect(callToActions).toHaveScreenshot();

      await setMobile(page);
      await expect(cards).toHaveScreenshot();
      await expect(callToActions).toHaveScreenshot();
    });

    test("inline table of contents have correct fonts", async ({ page }) => {
      await page.goto("");
      const contents = page.locator("section#example-docs");
      await expect(contents).toHaveScreenshot();
    });
  });
}
