const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { TanStackRouterWebpack } = require('@tanstack/router-plugin/webpack')

const mode = process.env.NODE_ENV || 'production';
const isProdMode = mode === 'production';
const devServerUrl = `https://localhost:3000/`;

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  mode,
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: isProdMode ? '/' : devServerUrl,
    filename: isProdMode ? '[name].[contenthash].js' : '[name].js',
    chunkFilename: isProdMode ? '[name].[contenthash].js' : '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
    new Dotenv({
      systemvars: true,
    }),
    TanStackRouterWebpack({ target: 'react', autoCodeSplitting: true, routesDirectory: "./src/routes" }),
  ],
};
