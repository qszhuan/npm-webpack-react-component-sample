var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, '.');

var config = {
  devtool:'source-map',
  entry: APP_DIR + '/hello.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'hello.lib.js',
    library:'HelloMessage',
    libraryTarget:'var'
  },
  module : {
     loaders: [
            { test: /\.jsx$/, loader: "jsx-loader" },
        ],
  }
};

module.exports = config;