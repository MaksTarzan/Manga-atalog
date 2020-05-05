const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const variables = require('./variables.js');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        sourceMapFilename: 'sourceMap.map.js'
    },

    module: {
        rules: [
            {
                test: /\.(m?js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({  //
            filename: 'index.html',
            template: './src/index.html',
            title: variables.title,
            greetings: variables.greetings
        })
        //new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};