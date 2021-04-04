const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

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
                test: /\.s(a|c)ss$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: { modules: true }
                  },
                  'sass-loader'
                ]
              }
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }, 
    plugins: [
        new ErrorOverlayPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],
    devtool: 'cheap-module-source-map'
}