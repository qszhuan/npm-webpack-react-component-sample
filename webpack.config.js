var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, '.');

var config = {
  devtool:'source-map',
  entry: APP_DIR + '/loader.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'loader.js'
  },
  module : {
     loaders: [
            { test: /\.jsx$/, loader: "jsx-loader" },
             { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "less-loader") }
        ],
  },
   plugins: [
        // extract inline css into separate 'styles.css'
        new ExtractTextPlugin('styles.css')
    ]
};

module.exports = config;