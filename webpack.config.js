const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
  // 入口文件
  entry: {
      app: './src/index.js'
  },
  // 输出到dist文件夹, 文件名字为bundle.js
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname,'./dist')
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './dist',
    overlay: true,

  },
  plugins: [
    new HtmlWebpackPlugin({
      minify:{
          removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号。
      },
      hash:true,
      template:'./src/index.html' //模板文件
    }),
  ],
}