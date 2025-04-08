const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => ({
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'async',
        },
      },
    },
  },
  performance: {
    hints: false,
  },
  devtool: 'source-map',
});
