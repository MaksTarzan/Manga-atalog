const merge = require('webpack-merge');
const c = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(c, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    }
});