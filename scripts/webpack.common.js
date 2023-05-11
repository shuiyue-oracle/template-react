const path = require('path');
const webpack = require('webpack');

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
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // 定义在代码中可以替换的一些常量 
      __DEV__: process.env.NODE_ENV === "development",
    })
  ],
  stats: "errors-only",
  infrastructureLogging: {
    level: 'error'
  }
}