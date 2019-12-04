const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',

  devtool: 'source-map',

  output: {
    filename: 'bindle.js',
    path: path.join(__dirname, 'dist'),
  },

  plugins: [new HtmlWebpackPlugin()],

  resolve: {
    extensions: ['.js'],
  },

  watch: false,
};
