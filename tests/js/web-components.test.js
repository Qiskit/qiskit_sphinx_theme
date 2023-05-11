const fs = require("fs").promises;
const path = require("path");
const { expect, test } = require("@jest/globals");

test("top-nav-bar.js should have identical content", async () => {
  const furoFp = path.resolve(
    __dirname,
    "../../qiskit_sphinx_theme/furo/base/static/js/web-components/top-nav-bar.js"
  );
  const pytorchFp = path.resolve(
    __dirname,
    "../../qiskit_sphinx_theme/pytorch_base/static/js/web-components/top-nav-bar.js"
  );

  const furo = await fs.readFile(furoFp, "utf8");
  const pytorch = await fs.readFile(pytorchFp, "utf8");
  expect(furo).toEqual(pytorch);
});
