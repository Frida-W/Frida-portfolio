
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/dist',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },
// };

const path = require('path')   
module.exports = {
  entry:'/js/main.js',  //指定打包的入口文件
  output:{
    filename:"bundle.js", //指定打包的出口文件名
    path:path.resolve(__dirname,"./build") //指定出口路径
  },
}