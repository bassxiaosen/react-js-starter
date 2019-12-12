const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.jsx'),
  },
  output: {
    filename: 'js/[name].[chunkhash:8].bundle.js',
    chunkFilename: 'js/[name].[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
}