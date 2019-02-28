const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './main.ts',
    mode: 'development',
    devServer: {
        port: 5000    
    },
    output: {
        path: path.join(__dirname, './'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/, 
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin('style.css')
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}