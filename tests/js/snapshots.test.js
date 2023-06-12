import { expect, test } from "@playwright/test";

test("left side bar table of contents renders correctly", async ({ page }) => {
  await page.goto("");
  const leftToC = page.locator("div.sidebar-tree");
  await expect(leftToC).toHaveScreenshot();
});

test.describe("footer", () => {
  test("includes page analytics", async ({ page }) => {
    await page.goto("");
    const footer = page.locator("footer");
    await expect(footer).toHaveScreenshot();
  });
});
