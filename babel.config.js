module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react'
  ],
  plugins: [
    'react-hot-loader/babel',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    'dynamic-import-webpack',
    'lodash'
  ]
}