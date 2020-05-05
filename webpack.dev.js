const merge = require('webpack-merge');
const c = require('./webpack.config.js');

module.exports = merge(c, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});