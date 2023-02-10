const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    port: 3300
  },
  mode: "development",
  devtool: "source-map",
  entry: "./DEV/index.tsx",
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './DEV/index.html',
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, use: {loader: "ts-loader"} },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs', '.ejs'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};
