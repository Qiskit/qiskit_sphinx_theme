import { expect, test } from "@playwright/test";

test.describe("footer", () => {
  test("includes page analytics", async ({ page }) => {
    await page.goto("");
    const footer = page.locator("footer");
    await expect(footer).toHaveScreenshot();
  });
});

test("tutorials do not have purple border", async ({ page }) => {
  await page.goto("sphinx_guide/notebook_gallery.html");
  const tutorial = page.locator("div.nbsphinx-gallery");
  await expect(tutorial).toHaveScreenshot();
});
