const path = require('path')
const resolve = path.resolve

const isProductEnv = process.env.NODE_ENV === 'production'

const env = (dev, product) => {
  if (!product) {
    product = dev
  }
  return isProductEnv ? product : dev
}

const getDir = (path) => {
  return resolve(process.cwd(), ...path)
}

module.exports = {
  env,
  isProductEnv,
  getDir,
}