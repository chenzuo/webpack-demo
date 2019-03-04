1、npm install webpack --save-dev
2、npm install html-webpack-plugin --save-dev
3、npm install webpack-cli --save-dev
4、create webpack.config.js
5、npm install --save-dev style-loader css-loader 

6、command:C#> webpack -p 

抽取到指定文件
参考地址：https://blog.csdn.net/qq_28387069/article/details/83247598
由于ExtractTextWebpackPlugin正式版对webpack4不支持，所以必须使用最新版，安装命令
7、npm install --save-dev extract-text-webpack-plugin
8、配置webpack.config.js
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].[chunkHash:5].css'),
  ]
}

最后打包:#>webpack -p
就会发现css已经打包成功
