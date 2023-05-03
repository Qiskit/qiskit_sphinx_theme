/**
 * Determine the URL for the version's documentation.
 *
 * @param version currentURL: The current browser's URL.
 * @param version string: The version of the docs, e.g. '0.4'.
 * @returns string | null
 */
const determineVersionURL = (currentURL, version) => {
  // We expect URls to either be `documentation/` (Terra) or `ecosystem/<project>`.
  const match = currentURL.match(
    /(?:.*)(\/ecosystem\/\w+|\/documentation)(?:\/|$)/
  );
  if (!match) {
    return null;
  }
  return `${match[1]}/stable/${version}/index.html`;
};

/**
 * Change the browser's URL to the version's documentation. Do nothing if the current URL
 * is unexpected.
 *
 * @param version string: The version of the docs, e.g. '0.4'.
 */
const redirectToVersion = (version) => {
  const result = determineVersionURL(window.location.href, version);
  if (!result) {
    console.error(
      `Could not determine the version URL for ${window.location.href} with version ${version}`
    );
    return;
  }
  window.location.href = result;
};

if (typeof module === "undefined") {
  // Export utils for Sphinx usage. Assigning the values to `window` makes
  // the values available globally.
  window.redirectToVersion = redirectToVersion;
} else {
  // Export utils for Jest testing.
  module.exports = {
    determineVersionURL,
  };
}
