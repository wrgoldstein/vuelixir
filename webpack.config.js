const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
  },
  module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: "vue-style-loader" },
            { loader: "css-loader" }
          ]
        },
        {
          test: /\.vue$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'vue-loader'
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-env']
          }
        }
      ]
    },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  devServer: {
    publicPath: '/dist/'
  }
  // , stats: "errors-only"
};
