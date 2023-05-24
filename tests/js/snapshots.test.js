const fs = require("fs").promises;
const path = require("path");

const puppeteer = require("puppeteer");
const {
  afterAll,
  beforeAll,
  describe,
  expect,
  test,
} = require("@jest/globals");

const PORT = process.env.PORT || 8080;
const BASE_URL = `http://localhost:${PORT}`;

let browser;

beforeAll(async () => {
  // First, check that the docs were built with Furo.
  const indexHtmlFp = path.resolve(
    __dirname,
    "../../example_docs/docs/_build/html/index.html"
  );
  const indexHtml = await fs.readFile(indexHtmlFp, "utf8");
  if (!indexHtml.includes("Furo")) {
    throw new Error(
       "The example docs weren't built with Furo. Please first run " +
       "`THEME=_qiskit_furo tox -e docs`, then restart the server with `npm start`, then run " +
       "the tests with `npm test`"
    )
  }

  browser = await puppeteer.launch({ headless: "true" });

  const err = async () => {
    await browser.close();
    throw new Error(
      `Server is not running at ${BASE_URL}. In a new terminal tab, run 'npm start'.`
    );
  };

  try {
    const page = await browser.newPage();
    const response = await page.goto(BASE_URL, {
      timeout: 1000,
    });
    await page.close();

    const isServerRunning = response !== null && response.status() < 400;
    if (!isServerRunning) {
      await err();
    }
  } catch (error) {
    await err();
  }
});

afterAll(async () => {
  if (browser !== undefined) {
    await browser.close();
  }
});

describe("The footer", () => {
  it("should match the snapshot", async () => {
    const page = await browser.newPage();
    await page.goto(BASE_URL);

    // Select the footer element and take a screenshot
    const footer = await page.$("footer");
    const screenshot = await footer.screenshot();
    await page.close();

    expect(screenshot).toMatchImageSnapshot();
  });
});
