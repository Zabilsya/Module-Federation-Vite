const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack')

const deps = require("../package.json").dependencies;

const mode = process.env.NODE_ENV || 'production';
const isProdMode = mode === 'production';
const devServerUrl = `https://localhost:3001/`;

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
    new ModuleFederationPlugin({
          name: "remote",
          filename: 'remoteEntry.js',
          exposes: {
            './components': './src/components',
          },
          dts: {
            generateTypes: {
              extractRemoteTypes: true,
              extractThirdParty: true,
              deleteTypesFolder: true,
              generateAPITypes: true,
              compileInChildProcess: true,
            },
            consumeTypes: {
              consumeAPITypes: true,
              deleteTypesFolder: true,
              maxRetries: 3,
            },
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
              eager:true
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
              eager:true
            },
          },
        }),
  ],
};
