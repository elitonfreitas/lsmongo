const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/lib',
    filename: 'lsmongo.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      mangle: {
        except: ['StorageDB', 'Collection']
      }
    }),
    new webpack.BannerPlugin('Created by Eliton Freitas based in Acathur StorageDB lib.\n(c) 2017 Instapp.\n\nhttps://github.com/elitonfreitas/lsmongo\nReleased under the MIT License.')
  ],
  devtool: false
}
