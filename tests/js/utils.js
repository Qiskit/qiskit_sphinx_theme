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

/* If the content is too big for the viewport, the Qiskit top nav bar will hide the content. That
 *  has for some reason caused some flakes in CI, that the nav bar very minorly changes its
 *  position. And it's generally annoying to hide the content we care about. */
const hideTopNavBar = async (page, mobile = false) => {
  await page
    .locator("qiskit-ui-shell")
    .evaluate((el) => (el.style.display = "none"));
  if (mobile) {
    await page
      .locator(".mobile-header")
      .evaluate((el) => (el.style.display = "none"));
  }
};

export {
    setDesktop,
    setMobile,
    setTablet,
    click,
    scrollDown,
    isVisibleInViewport,
    hideTopNavBar,
}
