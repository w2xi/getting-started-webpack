const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    // 输出到 dist文件夹
    path: path.resolve(__dirname, "../dist"),
    filename: "js/chunk-[contenthash].js",
    // 每次打包前自动清除旧的dist
    clean: true,
  },
  resolve: {
    // 路径别名
    alias: {
      "@": path.resolve("./src"),
      assets: "~assets",
    },
    // 引入文件时可以省略后缀
    extensions: [".js", ".vue", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        // 匹配文件后缀的规则
        test: /\.(css|s[cs]ss)$/,
        use: [
          // loader 的执行顺序是从右到左
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 1024 * 2, // 2M
          },
        },
        generator: {
          filename: "images/[contenthash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "underscore",
    }),
    new HtmlWebpackPlugin({
      // 模板文件
      template: "./public/index.html",
      // 打包后的文件名
      filename: "index.html",
      // js文件插入 body里
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/chunk-[contenthash].css",
      ignoreOrder: true,
    }),
    new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format: ` build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
    })
  ],
};
