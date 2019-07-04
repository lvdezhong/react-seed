const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const LodashWebpackPlugin = require('lodash-webpack-plugin')

const Env = require('./env')
const {
  isProductEnv,
  env,
  getDir,
} = Env

module.exports = {
  entry: ['@babel/polyfill', getDir(['./src/index.js'])],
  output: {
    path: getDir(['./dist']),
    filename: env('[name].js', '[name].[chunkhash:8].js'),
    chunkFilename: env('[name].js', '[name].[chunkhash:8].js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProductEnv,
            },
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: getDir(['./src/index.html']),
      environment: JSON.stringify(process.env.NODE_ENV),
    }),
    new MiniCssExtractPlugin({
      filename: env('[name].css', '[name].[contenthash:8].css'),
      chunkFilename: env('[name].css', '[name].[contenthash:8].css')
    }),
    new CopyWebpackPlugin([{
      from: getDir(['./public']),
      to: getDir(['./dist'])
    }]),
    new LodashWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
    alias: { // 关于设置的alias后eslint不认识的问题：https://segmentfault.com/q/1010000016679036/a-1020000016688993
      src: getDir(['./src']),
      assets: getDir(['./src/assets']),
      // components: getDir(['./src/components']),
      // store: getDir(['./src/store']),
      // services: getDir(['./src/services']),
      // utils: getDir(['./src/utils']),
      // enum: getDir(['./src/enum']),
    }
  }
}