var webpack = require('webpack');
var path = require('path');
var config = require('./package.json');
console.log(config.version);

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, '.');

var config = {
  entry: APP_DIR + '/hello.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'hello.js',
    libraryTarget: "commonjs2"
  },
  module : {
     loaders: [
            { test: /\.jsx$/, loader: "jsx-loader" },
            {
              test: /\.less$/,
              loader: "style!css!less"
            }
        ],
     
  },
  externals:{
      'react':'React',
      'react-dom':'ReactDOM'
  }
};

module.exports = config;