const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|app.js)/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Production",
            template: "./src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
}