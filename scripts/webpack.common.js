const path = require('path');
const webpack = require('webpack');
const WebpackBar = require("webpackbar");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "../src/index.jsx"),
  output: {
    filename: "[id].[chunkhash:8].js",
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          },
        },
        generator: {
          filename: "assets/images/[name].[hash:8][ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // 定义在代码中可以替换的一些常量 
      __DEV__: process.env.NODE_ENV === "development",
    }),
    new WebpackBar(),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: '/node_modules/',
      fix: true,
    }),
  ],
  stats: "errors-only",
  infrastructureLogging: {
    level: 'error'
  }
}