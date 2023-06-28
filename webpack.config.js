// Inspired by Furo's webpack config: https://github.com/pradyunsg/furo/blob/main/webpack.config.js

const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    "qiskit-sphinx-theme": [
      "./src/qiskit_sphinx_theme/assets/scripts/qiskit-sphinx-theme.js",
      "./src/qiskit_sphinx_theme/assets/styles/qiskit-sphinx-theme.scss",
    ],
  },
  output: {
    filename: "scripts/[name].js",
    path: resolve(__dirname, "src/qiskit_sphinx_theme/theme/qiskit-sphinx-theme/static"),
  },
  plugins: [new MiniCssExtractPlugin({ filename: "styles/[name].css" })],
  optimization: { minimizer: [`...`, new CssMinimizerPlugin()] },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
};
