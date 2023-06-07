import { expect, test } from "@playwright/test";

const setMobile = async (page) => {
  await page.setViewportSize({ width: 375, height: 812 });
}

const setTablet = async (page) => {
   await page.setViewportSize({ width: 1280, height: 720 });
}

test.describe("Furo top nav bar", () => {
  test("uses custom page ToC icon on tablet", async ({ page }) => {
    await setTablet(page);
    await page.goto("");
    const pageToC = page.locator("div.content-icon-container");
    await expect(pageToC).toHaveScreenshot();
  });

  test("uses custom icon and text on mobile", async ({ page }) => {
    await setMobile(page);
    await page.goto("");
    const header = page.locator("header.mobile-header");
    await expect(header).toHaveScreenshot();
  });
})

test.describe("footer", () => {
  test("includes page analytics", async ({ page }) => {
    await page.goto("");
    const footer = page.locator("footer");
    await expect(footer).toHaveScreenshot();
  });

  test("shows analytics options in purple when hovered", async ({page}) => {
    await page.goto("");
    const yesOption = page.locator("a.helpful-question.yes-link");
    await yesOption.hover();

    const analytics = page.locator("div.helpful-container");
    await expect(analytics).toHaveScreenshot();
  });

  test("says 'thank you' when analytics clicked", async ({page}) => {
    await page.goto("");
    const yesOption = page.locator("a.helpful-question.yes-link");
    await yesOption.click();

    const analytics = page.locator("div.helpful-container");
    await expect(analytics).toHaveScreenshot();
  });
});
