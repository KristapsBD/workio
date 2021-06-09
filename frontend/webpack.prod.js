const merge = require('webpack-merge');

const DuplicateCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  output: {
    filename: 'bundles/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [new DuplicateCheckerPlugin(), new BundleAnalyzerPlugin()],
});
