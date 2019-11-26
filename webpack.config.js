/* eslint-env node */

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { version } = require('./package.json')

const serverPublic = path.join(__dirname, 'server', 'public')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: serverPublic,
    filename: 'bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: './src', from: '*.html' },
      { context: './src', from: '*.css' },
      { context: './build', from: 'hello.js' }
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
      version
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: serverPublic
  }
}