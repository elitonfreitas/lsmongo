const UglifyJsPlugin = require('uglify-es-webpack-plugin')

module.exports = {
  entry: './index.ts',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts']
  },
  output: {
    filename: 'lsmongo.min.js',
    path: __dirname + '/dist'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
};