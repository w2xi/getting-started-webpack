const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = merge(base, {
  mode: "production",
  devtool: "nosources-source-map",
  plugins: [
    // 定义全局变量
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify("production"),
          VUE_APP_HTTP_BASE_URL: JSON.stringify("http://localhost:3000"),
        },
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist'),
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
});
