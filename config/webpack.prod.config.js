const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  plugins: [
    // 清空打包输出目录
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    },
    minimizer: [
      new UglifyJsPlugin({
        exclude: /\.min\.js$/, // 过滤掉以'.min.js'结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
        cache: true,
        parallel: true // 开启并行压缩，充分利用cpu
      }),
      // 用于优化css文件
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
      })
    ]
  }
}