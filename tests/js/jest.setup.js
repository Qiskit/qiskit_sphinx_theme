const { toMatchImageSnapshot } = require("jest-image-snapshot");

// The below adds `toMatchImageSnapshot` to Jest's `expect` so that you can call
// `expect(screenshot).toMatchImageSnapshot()`.
//
// We use JavaScript's partial application mechanism to pre-set the config used so that you don't
// have to keep passing the same config with each call to toMatchImageSnapshot().
//
// This config reduces the sensitivity of our tests because CI and local may have slight
// differences, such as how fonts render. We use SSIM (structural similarity index), rather than
// pixel-by-pixel comparisons, because it has fewer false positives. See
// https://github.com/americanexpress/jest-image-snapshot#recommendations-when-using-ssim-comparison.
const snapshotConfig = {
  comparisonMethod: "ssim",
  failureThreshold: 0.01,
  failureThresholdType: "percent",
};
expect.extend({
  toMatchImageSnapshot(received) {
    return toMatchImageSnapshot.call(this, received, snapshotConfig);
  },
});
