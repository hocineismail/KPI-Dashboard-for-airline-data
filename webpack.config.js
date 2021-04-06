const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: "sass-loader",
                    options: {
                      implementation: require("sass"),
                      sassOptions: {
                        fiber: false,
                      },
                    },
                  },
                ],
              },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }, 
    plugins: [ 
        new Dotenv(),
        new ErrorOverlayPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],
    devtool: 'cheap-module-source-map'
}