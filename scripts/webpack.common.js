const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    filename: '[id].[chunkhash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 500 * 1024, // 25kb
          },
        },
        generator: {
          filename: 'assets/images/[name].[hash:8][ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // 定义在代码中可以替换的一些常量
      __DEV__: process.env.NODE_ENV === 'development',
    }),
    new WebpackBar(),
  ],
  stats: 'errors-only',
  infrastructureLogging: {
    level: 'error',
  },
};
