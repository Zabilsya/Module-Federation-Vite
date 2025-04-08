const path = require('path');

module.exports = () => ({
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    liveReload: false,
    port: 3001,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    server: 'https',
    hot: true,
    host: 'localhost',
  },
});
