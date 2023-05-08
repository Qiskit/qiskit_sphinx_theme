const { describe, expect, test } = require("@jest/globals");
const {
  determineVersionURL: determineVersionURLPytorch,
} = require("../../qiskit_sphinx_theme/pytorch_base/static/js/utils.js");
const {
  determineVersionURL: determineVersionURLFuro,
} = require("../../qiskit_sphinx_theme/furo/base/static/js/utils.js");

const checkVersionURL = (inputURL, version, expected) => {
  expect(determineVersionURLPytorch(inputURL, version)).toEqual(expected);
  expect(determineVersionURLFuro(inputURL, version)).toEqual(expected);
};

describe("determineVersionURL()", () => {
  test("handles the /ecosystem scheme", () => {
    checkVersionURL(
      "https://qiskit.org/ecosystem/nature",
      "0.4",
      "/ecosystem/nature/stable/0.4/index.html"
    );
    checkVersionURL(
      "https://qiskit.org/ecosystem/finance",
      "0.6",
      "/ecosystem/finance/stable/0.6/index.html"
    );
    checkVersionURL(
      "https://qiskit.org/ecosystem/nature/index.html",
      "0.4",
      "/ecosystem/nature/stable/0.4/index.html"
    );
    checkVersionURL(
      "https://qiskit.org/ecosystem/nature/apidocs/index.html",
      "0.4",
      "/ecosystem/nature/stable/0.4/index.html"
    );

    // Already on stable URL:
    checkVersionURL(
      "https://qiskit.org/ecosystem/nature/stable/0.6/index.html",
      "0.4",
      "/ecosystem/nature/stable/0.4/index.html"
    );
    checkVersionURL(
      "https://qiskit.org/ecosystem/finance/stable/0.7/index.html",
      "0.6",
      "/ecosystem/finance/stable/0.6/index.html"
    );
    checkVersionURL(
      "https://qiskit.org/ecosystem/nature/stable/0.6/apidocs/index.html",
      "0.4",
      "/ecosystem/nature/stable/0.4/index.html"
    );
  });

  test("handles Terra", () => {
    checkVersionURL(
      "https://qiskit.org/documentation",
      "0.4",
      "/documentation/stable/0.4/index.html"
    );
    checkVersionURL(
      "https://qiskit.org/documentation/index.html",
      "0.4",
      "/documentation/stable/0.4/index.html"
    );
    checkVersionURL(
      "https://qiskit.org/documentation/apidocs/index.html",
      "0.4",
      "/documentation/stable/0.4/index.html"
    );

    // Already on stable URL:
    checkVersionURL(
      "https://qiskit.org/documentation/stable/0.6/index.html",
      "0.4",
      "/documentation/stable/0.4/index.html"
    );
    checkVersionURL(
      "https://qiskit.org/documentation/stable/0.6/apidocs/index.html",
      "0.4",
      "/documentation/stable/0.4/index.html"
    );
  });

  test("return null if the URL does not match", () => {
    checkVersionURL("https://qiskit.org", "0.4", null);
    checkVersionURL("https://qiskit.org/ecosystem", "0.4", null);
    checkVersionURL("file:///Users/qiskit/index.html", "0.4", null);
  });
});
