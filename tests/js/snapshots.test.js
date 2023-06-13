import { expect, test } from "@playwright/test";

// -----------------------------------------------------------------------
// Helper functions
// -----------------------------------------------------------------------

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

const scrollDown = async (page, numPixels) => {
  await page.evaluate((numPixels) => {
    window.scrollBy(0, numPixels);
  }, numPixels);
  // We have to wait for the page animation to update.
  await page.waitForTimeout(600);
};

const isVisibleInViewport = async (page, selector) => {
  return await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    const rect = element.getBoundingClientRect();

    // Check that the element is in the viewport. This can be useful, for example, to check
    // that an element is sticky.
    const inViewport =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    // Also check that the element is not obscured by another element on top.
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const topmostElement = document.elementFromPoint(centerX, centerY);

    return inViewport && topmostElement == element;
  }, selector);
};

// -----------------------------------------------------------------------
// Snapshot tests
// -----------------------------------------------------------------------

test.describe("Qiskit top nav bar", () => {
  test("does not cover Furo's menu bars when scrolled down", async ({
    page,
  }) => {
    await page.goto("sphinx_guide/lists.html");

    const check = async () => {
      const pageToCVisible = await isVisibleInViewport(
        page,
        "div.toc-title-container"
      );
      expect(pageToCVisible).toBe(true);

      const translationsVisible = await isVisibleInViewport(
        page,
        "div.qiskit-translations-container p"
      );
      expect(translationsVisible).toBe(true);

      await setMobile(page);
      const mobileHeaderVisible = await isVisibleInViewport(
        page,
        "header.mobile-header"
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

  test("does not cover the top of # anchor links", async ({ page }) => {
    const checkHeader = async () => {
      await page.goto("sphinx_guide/lists.html#definition-lists");
      // We have to wait for the page animation to update.
      await page.waitForTimeout(800);
      const headerVisible = await isVisibleInViewport(
        page,
        "section#definition-lists > h2"
      );
      expect(headerVisible).toBe(true);
    };

    await checkHeader();

    await setMobile(page);
    // Go to a new page first to reset the scroll state.
    await page.goto("");
    await checkHeader();
  });

  test("does not cover the side menus when they're expanded on mobile", async ({
    page,
  }) => {
    await setMobile(page);
    await page.goto("");

    await click(page, "div.header-right label.toc-overlay-icon i");
    const pageToCVisible = await isVisibleInViewport(
      page,
      "div.toc-title-container"
    );
    expect(pageToCVisible).toBe(true);

    // Reload the page to close the nav bar.
    await page.goto("");

    await click(page, "div.header-left i");
    const translationsVisible = await isVisibleInViewport(
      page,
      "div.qiskit-translations-container p"
    );
    expect(translationsVisible).toBe(true);
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

test.describe("left side bar", () => {
  test("table of contents renders correctly", async ({ page }) => {
    await page.goto("");
    const leftToC = page.locator("div.sidebar-tree");
    await expect(leftToC).toHaveScreenshot();
  });

  test("translations render correctly", async ({ page }) => {
    await page.goto("");
    const translations = page.locator("div.qiskit-translations-container");
    await expect(translations).toHaveScreenshot();

    await click(page, "div.qiskit-translations-container i");
    await expect(translations).toHaveScreenshot();
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
    const yesOption = page.locator("a.helpful-question.yes-link");

    // First, check that we change the color of the buttons when hovering.
    await yesOption.hover();
    const backgroundColor = await yesOption.evaluate(
      (node) => getComputedStyle(node).backgroundColor
    );
    expect(backgroundColor).toEqual("rgb(105, 41, 196)");

    // Then, check the screenshot when clicking.
    await yesOption.click();
    const analytics = page.locator("div.helpful-container");
    await expect(analytics).toHaveScreenshot();
  });
});
