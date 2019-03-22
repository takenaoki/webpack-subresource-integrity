var SriPlugin = require('webpack-subresource-integrity');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Critters = require('critters-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    crossOriginLoading: 'anonymous'
  },
  plugins: [
    new SriPlugin({
      hashFuncNames: ['sha256', 'sha384'],
      enabled: true
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      inject: true,
      compile: true
    }),
    new Critters({
      preload: 'swap',
      preloadFonts: true,
      noscriptFallback: true,
      logLevel: 'warn'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              namedExport: true,
              modules: true,
              camelCase: true,
              sourceMap: true,
              localIdentName: '[name]__[local]--[hash:2]',
              importLoaders: 1
            }
          }
        ]
      }
    ]
  }
};
