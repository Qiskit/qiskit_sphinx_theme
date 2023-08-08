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

import {
  setDesktop,
  setMobile,
  setTablet,
  click,
  scrollDown,
  isVisibleInViewport,
  hideTopNavBar,
} from "./utils";

test.describe("Qiskit top nav bar does not cover", () => {
  test("Furo's menu bars when scrolled down", async ({ page }) => {
    await page.goto("sphinx_guide/lists.html");

    const check = async () => {
      const pageToCVisible = await isVisibleInViewport(
        page,
        "div.toc-title-container",
      );
      expect(pageToCVisible).toBe(true);

      const searchVisible = await isVisibleInViewport(
        page,
        "input.sidebar-search",
      );
      expect(searchVisible).toBe(true);

      await setMobile(page);
      const mobileHeaderVisible = await isVisibleInViewport(
        page,
        "header.mobile-header",
      );
      expect(mobileHeaderVisible).toBe(true);
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
    const checkHeader = async () => {
      await page.goto("sphinx_guide/lists.html#definition-lists");
      const headerVisible = await isVisibleInViewport(
        page,
        "section#definition-lists > h2",
      );
      expect(headerVisible).toBe(true);
    };

    await checkHeader();

    await setMobile(page);
    // Go to a new page first to reset the scroll state.
    await page.goto("");
    await checkHeader();
  });

  test("the side menus when they're expanded on mobile", async ({ page }) => {
    await setMobile(page);
    await page.goto("");

    await click(page, "div.header-right label.toc-overlay-icon i");
    const pageToCVisible = await isVisibleInViewport(
      page,
      "div.toc-title-container",
    );
    expect(pageToCVisible).toBe(true);

    // Reload the page to close the nav bar.
    await page.goto("");

    await click(page, "div.header-left i");
    const searchVisible = await isVisibleInViewport(
      page,
      "input.sidebar-search",
    );
    expect(searchVisible).toBe(true);
  });
});

test.describe("Furo menu bars", () => {
  test("use custom page ToC icon on tablet", async ({ page }) => {
    await setTablet(page);
    await page.goto("");
    const pageToC = page.locator("div.content-icon-container");
    await expect(pageToC).toHaveScreenshot();
  });

  test("use custom icon and text on mobile", async ({ page }) => {
    await setMobile(page);
    await page.goto("");
    const header = page.locator("header.mobile-header");
    await expect(header).toHaveScreenshot();
  });
});

test("right side bar is not broken by our page layout", async ({ page }) => {
  // We intentionally use a short page to keep the screenshot shorter.
  await page.goto("sphinx_guide/notebook.html");
  const tocDrawer = page.locator(".toc-drawer");
  await expect(tocDrawer).toHaveScreenshot();
});

test.describe("left side bar", () => {
  test("renders correctly", async ({ page }) => {
    // Go to a top-level page so that we can see how the expanded side bar looks.
    await page.goto("sphinx_guide/autodoc.html");
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
      "div.qiskit-previous-releases-container",
    );
    await expect(previousReleases).toHaveScreenshot();
  });
});

test.describe("api docs", () => {
  test("module page", async ({ page }) => {
    await page.goto("sphinx_guide/autodoc.html");
    await hideTopNavBar(page);
    const content = page.locator("div.article-container");
    await expect(content).toHaveScreenshot();
  });

  test("class page", async ({ page }) => {
    await page.goto("stubs/api_example.Electron.html");
    await hideTopNavBar(page);
    const content = page.locator("div.article-container");
    await expect(content).toHaveScreenshot();
  });

  test("function page", async ({ page }) => {
    await page.goto("stubs/api_example.my_function.html");
    const content = page.locator("div.article-container");
    await expect(content).toHaveScreenshot();
  });
});

test.describe("footer", () => {
  test("includes page analytics", async ({ page }) => {
    await page.goto("");
    const footer = page.locator("footer");
    await expect(footer).toHaveScreenshot();
  });

  test("says 'thank you' when analytics clicked", async ({ page }) => {
    await page.goto("");
    const yesOption = page.locator("div.qiskit-analytics-container a").first();

    // First, check that we change the color of the buttons when hovering.
    await yesOption.hover();
    const backgroundColor = await yesOption.evaluate(
      (node) => getComputedStyle(node).backgroundColor,
    );
    expect(backgroundColor).toEqual("rgb(105, 41, 196)");

    // Then, check the screenshot when clicking.
    await yesOption.click();
    const analytics = page.locator("div.qiskit-analytics-container");
    await expect(analytics).toHaveScreenshot();
  });
});

test("tables align with qiskit.org", async ({ page }) => {
  await page.goto("sphinx_guide/tables.html");
  await hideTopNavBar(page);
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
  await hideTopNavBar(page);
  const admonitions = page.locator("section#admonitions");
  await expect(admonitions).toHaveScreenshot();
});

test("Sphinx Design elements have no shadows", async ({ page }) => {
  await page.goto("sphinx_guide/panels.html");
  await hideTopNavBar(page);
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
  await hideTopNavBar(page, true);

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
