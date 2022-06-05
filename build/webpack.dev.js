const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");
const webpack = require("webpack");

module.exports = merge(base, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    open: true,
    client: {
      logging: 'info',
    }
  },
  plugins: [
    // 定义全局变量
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify("development"),
          VUE_APP_HTTP_BASE_URL: JSON.stringify("http://localhost:3000"),
        },
      },
    }),
  ],
});
