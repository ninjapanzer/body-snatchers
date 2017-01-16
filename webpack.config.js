/*eslint-disable no-undef, no-unused-vars*/
var path = require('path')
var webpack = require('webpack')
module.exports = {
  context: __dirname + '/src',
  entry: {
    dates: './dates.js',
    forms: './forms.js',
    ajaxAnchor: './ajaxAnchor.js'
    //b: "./b",
    //c: ["./c", "./d"]
  },
  externals: {
    'moment':'moment'
  },
  output: {
    filename: '[name].component.js',
    path: __dirname + '/dist'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
    })//,
    //new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
/*eslint-disable no-undef, no-unused-vars*/
