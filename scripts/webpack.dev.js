const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const pkg = require('../package.json');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true, // 热更新
    port: 3000,
    open: false,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|css|sass)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running here: http://localhost:3000'],
        notes: ['Some additional notes to be displayed upon successful compilation']
      },
      clearConsole: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      title: pkg.name,
      meta: {
        description: {
          type: "description",
          content: pkg.description,
        },
      },
      minify: "auto",
    })
  ]
})