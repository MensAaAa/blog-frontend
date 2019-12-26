const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
require('dotenv').config()
const Dotenv = require('dotenv-webpack')
const path = require('path');

module.exports = withImages(withCSS(withSass({
  webpack(config, options) {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      })
    ];
    return config;
  }
})));