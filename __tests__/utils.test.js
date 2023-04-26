const { describe, expect, test } = require("@jest/globals");
const {
  determineVersionURL,
} = require("../qiskit_sphinx_theme/pytorch_base/static/js/utils.js");

describe("determineVersionURL()", () => {
  test("handles the /ecosystem scheme", () => {
    expect(
      determineVersionURL("https://qiskit.org/ecosystem/nature", "0.4")
    ).toEqual("/ecosystem/nature/stable/0.4/index.html");
    expect(
      determineVersionURL("https://qiskit.org/ecosystem/finance", "0.6")
    ).toEqual("/ecosystem/finance/stable/0.6/index.html");
    expect(
      determineVersionURL(
        "https://qiskit.org/ecosystem/nature/index.html",
        "0.4"
      )
    ).toEqual("/ecosystem/nature/stable/0.4/index.html");
    expect(
      determineVersionURL(
        "https://qiskit.org/ecosystem/nature/apidocs/index.html",
        "0.4"
      )
    ).toEqual("/ecosystem/nature/stable/0.4/index.html");

    // Already on stable URL:
    expect(
      determineVersionURL(
        "https://qiskit.org/ecosystem/nature/stable/0.6/index.html",
        "0.4"
      )
    ).toEqual("/ecosystem/nature/stable/0.4/index.html");
    expect(
      determineVersionURL(
        "https://qiskit.org/ecosystem/finance/stable/0.7/index.html",
        "0.6"
      )
    ).toEqual("/ecosystem/finance/stable/0.6/index.html");
    expect(
      determineVersionURL(
        "https://qiskit.org/ecosystem/nature/stable/0.6/apidocs/index.html",
        "0.4"
      )
    ).toEqual("/ecosystem/nature/stable/0.4/index.html");
  });

  test("handles Terra", () => {
    expect(
      determineVersionURL("https://qiskit.org/documentation", "0.4")
    ).toEqual("/documentation/stable/0.4/index.html");
    expect(
      determineVersionURL("https://qiskit.org/documentation/index.html", "0.4")
    ).toEqual("/documentation/stable/0.4/index.html");
    expect(
      determineVersionURL(
        "https://qiskit.org/documentation/apidocs/index.html",
        "0.4"
      )
    ).toEqual("/documentation/stable/0.4/index.html");

    // Already on stable URL:
    expect(
      determineVersionURL(
        "https://qiskit.org/documentation/stable/0.6/index.html",
        "0.4"
      )
    ).toEqual("/documentation/stable/0.4/index.html");
    expect(
      determineVersionURL(
        "https://qiskit.org/documentation/stable/0.6/apidocs/index.html",
        "0.4"
      )
    ).toEqual("/documentation/stable/0.4/index.html");
  });

  test("return null if the URL does not match", () => {
    expect(determineVersionURL("https://qiskit.org", "0.4")).toBeNull();
    expect(
      determineVersionURL("https://qiskit.org/ecosystem", "0.4")
    ).toBeNull();
    expect(
      determineVersionURL("file:///Users/qiskit/index.html", "0.4")
    ).toBeNull();
  });
});
