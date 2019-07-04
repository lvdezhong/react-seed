module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    "semi": 0,
    "react/jsx-filename-extension": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "global-require": 0
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      }
    }
  }
}