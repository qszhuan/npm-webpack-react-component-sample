var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, '.');

var config = {
  entry: APP_DIR + '/hello.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'hello.js',
    libraryTarget:'var',
      library: "Hello"
  },
  module : {
     loaders: [
            { test: /\.jsx$/, loader: "jsx-loader" }
        ],
  },
  externals:{
      'react':'React',
      'react-dom':'ReactDOM'
  }
};

module.exports = config;