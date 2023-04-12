const { test, expect } = require("@jest/globals");

const _ECOSYSTEM_PROJECTS = [
  "aer",
  "experiments",
  "finance",
  "machine-learning",
  "nature",
  "optimization",
  "rustworkx",
];

const _determineVersionURL = (currentURL, version) => {
  const ecosystemMatch = currentURL.match(/(?:.*)(\/ecosystem\/\w+)(?:\/|$)/);

  // With `/documentation/...` URLs, we need to detect whether the folder after `/documentation`
  // is a top-level Ecosystem project (e.g. /documentation/nature) vs. a sub-folder
  // of the Terra docs (e.g. /documentation/apidocs/foo.html).
  //
  // So, we hardcode the specific ecosystem projects that were using the legacy scheme.
  // Everything else is assumed to be a Terra sub-folder.
  const projectsPattern = _ECOSYSTEM_PROJECTS.join("|");
  const legacyEcosystemMatch = currentURL.match(
    new RegExp(`(?:.*)(\\/documentation\\/(${projectsPattern}))(?:\\/|$)`)
  );
  const terraMatch = currentURL.match(/(?:.*)(\/documentation)(?:\/|$)/);
  const match = ecosystemMatch || legacyEcosystemMatch || terraMatch;
  if (!match) {
    return null;
  }
  return `${match[1]}/stable/${version}/index.html`;
};

test("handles the /ecosystem scheme", () => {
  expect(
    _determineVersionURL("https://qiskit.org/ecosystem/nature", "0.4")
  ).toEqual("/ecosystem/nature/stable/0.4/index.html");
  expect(
    _determineVersionURL("https://qiskit.org/ecosystem/finance", "0.6")
  ).toEqual("/ecosystem/finance/stable/0.6/index.html");
  expect(
    _determineVersionURL(
      "https://qiskit.org/ecosystem/nature/index.html",
      "0.4"
    )
  ).toEqual("/ecosystem/nature/stable/0.4/index.html");
  expect(
    _determineVersionURL(
      "https://qiskit.org/ecosystem/nature/apidocs/index.html",
      "0.4"
    )
  ).toEqual("/ecosystem/nature/stable/0.4/index.html");

  // Already on stable URL:
  expect(
    _determineVersionURL(
      "https://qiskit.org/ecosystem/nature/stable/0.6/index.html",
      "0.4"
    )
  ).toEqual("/ecosystem/nature/stable/0.4/index.html");
  expect(
    _determineVersionURL(
      "https://qiskit.org/ecosystem/finance/stable/0.7/index.html",
      "0.6"
    )
  ).toEqual("/ecosystem/finance/stable/0.6/index.html");
  expect(
    _determineVersionURL(
      "https://qiskit.org/ecosystem/nature/stable/0.6/apidocs/index.html",
      "0.4"
    )
  ).toEqual("/ecosystem/nature/stable/0.4/index.html");
});

test("handles Terra", () => {
  expect(
    _determineVersionURL("https://qiskit.org/documentation", "0.4")
  ).toEqual("/documentation/stable/0.4/index.html");
  expect(
    _determineVersionURL("https://qiskit.org/documentation/index.html", "0.4")
  ).toEqual("/documentation/stable/0.4/index.html");
  expect(
    _determineVersionURL(
      "https://qiskit.org/documentation/apidocs/index.html",
      "0.4"
    )
  ).toEqual("/documentation/stable/0.4/index.html");

  // Already on stable URL:
  expect(
    _determineVersionURL(
      "https://qiskit.org/documentation/stable/0.6/index.html",
      "0.4"
    )
  ).toEqual("/documentation/stable/0.4/index.html");
  expect(
    _determineVersionURL(
      "https://qiskit.org/documentation/stable/0.6/apidocs/index.html",
      "0.4"
    )
  ).toEqual("/documentation/stable/0.4/index.html");
});

test("handles the legacy /documentation/<ecosystem> scheme", () => {
  expect(
    _determineVersionURL("https://qiskit.org/documentation/nature", "0.4")
  ).toEqual("/documentation/nature/stable/0.4/index.html");
  expect(
    _determineVersionURL("https://qiskit.org/documentation/finance", "0.6")
  ).toEqual("/documentation/finance/stable/0.6/index.html");
  expect(
    _determineVersionURL(
      "https://qiskit.org/documentation/nature/index.html",
      "0.4"
    )
  ).toEqual("/documentation/nature/stable/0.4/index.html");
  expect(
    _determineVersionURL(
      "https://qiskit.org/documentation/nature/apidocs/index.html",
      "0.4"
    )
  ).toEqual("/documentation/nature/stable/0.4/index.html");

  // Already on stable URL:
  expect(
    _determineVersionURL(
      "https://qiskit.org/documentation/nature/stable/0.6/index.html",
      "0.4"
    )
  ).toEqual("/documentation/nature/stable/0.4/index.html");
  expect(
    _determineVersionURL(
      "https://qiskit.org/documentation/finance/stable/0.7/index.html",
      "0.6"
    )
  ).toEqual("/documentation/finance/stable/0.6/index.html");
  expect(
    _determineVersionURL(
      "https://qiskit.org/documentation/nature/stable/0.6/apidocs/index.html",
      "0.4"
    )
  ).toEqual("/documentation/nature/stable/0.4/index.html");
});

test("return null if the URL does not match", () => {
  expect(_determineVersionURL("https://qiskit.org", "0.4")).toBeNull();
  expect(
    _determineVersionURL("https://qiskit.org/ecosystem", "0.4")
  ).toBeNull();
  expect(
    _determineVersionURL("file:///Users/qiskit/index.html", "0.4")
  ).toBeNull();
});
