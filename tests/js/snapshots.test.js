import { expect, test } from "@playwright/test";

test.describe("footer", () => {
  test("to include page analytics", async ({ page }) => {
    await page.goto("");
    const footer = page.locator("footer");
    await expect(footer).toHaveScreenshot();
  });
});
