const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = (args) => (
  merge(common, {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new CompressionPlugin(),
      args.isAnalyze ? new BundleAnalyzerPlugin() : () => { console.log('production mode'); },
    ],
  }));
