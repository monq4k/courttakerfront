const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://[::1]:3000',
      },
    },
  },
  devtool: 'inline-source-map',
});
