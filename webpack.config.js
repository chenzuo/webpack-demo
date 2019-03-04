var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
var cleanwebpackplugin = require('clean-webpack-plugin'); //清理打包目录
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        './index': './app/src/js/index.js' //入口文件
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                "css-loader"
            ]
        }, {
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 50,
                    outputPath: "images"
                }
            }]
        }]
    },
    output: {
        //__dirname 当前webpack.config.js的路径
        filename: 'js/[name].[chunkHash:5].js', //打包后index.js的名字，
        //   path: path.resolve(__dirname)
    },
    //插件
    plugins: [
        new cleanwebpackplugin(["dist"]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:"css/[name].[chunkHash:5].css"
        })
    ]
};