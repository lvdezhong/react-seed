const merge = require('webpack-merge')
const base = require('./config/webpack.base.config')

let config
if (process.env.NODE_ENV === 'production') {
  config = require('./config/webpack.prod.config')
} else if (process.env.NODE_ENV === 'development') {
  config = require('./config/webpack.dev.config')
} else if (process.env.NODE_ENV === 'analyze') {
  config = require('./config/webpack.analyze.config')
}

module.exports = merge(base, config)
