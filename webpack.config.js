var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css打包插件
var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
module.exports = {
    entry: {
        './index': './app/src/js/index.js' //入口文件
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    output: {
        //__dirname 当前webpack.config.js的路径
        filename: 'js/[name].[chunkHash:5].js', //打包后index.js的名字，
        //   path: path.resolve(__dirname)
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/src/index.html'
        }),
        new ExtractTextPlugin('css/[name].[chunkHash:5].css')
    ]
};