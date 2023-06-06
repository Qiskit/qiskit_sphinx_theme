import { expect, test } from "@playwright/test";

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
