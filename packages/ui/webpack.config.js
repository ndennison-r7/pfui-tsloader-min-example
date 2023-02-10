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
      // {
      //   test: /\.m?jsx$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [
      //         "@babel/preset-env",
      //         "@babel/preset-react",
      //         "@babel/preset-typescript",
      //       ],
      //       "plugins": [
      //         "@babel/proposal-class-properties",
      //         ["@babel/plugin-transform-runtime",
      //           {
      //             "regenerator": true
      //           }
      //         ]
      //       ],
      //     },
      //   },
      // },
      { test: /\.tsx?$/, use: {loader: "ts-loader"} },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs', '.ejs'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};
