module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: { // 配置此静态文件服务器，可以用来预览打包后项目
    contentBase: __dirname + '/dist', //本地服务器所加载的页面所在的目录
    // historyApiFallback: true,
    inline: true, //实时刷新
    hot: true,
    host: '0.0.0.0',
    // proxy: {
    //   '/api': {
    //     target: 'http://test-pandora.91jzx.cn',
    //     changeOrigin: true,
    //     pathRewrite: { '^/api' : '' }
    //   }
    // }
  }
}