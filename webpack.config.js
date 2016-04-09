var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'js/background.js': ['./js/background.js'],
    'js/content.js': ['./js/content.js'],
    'js/options.js': ['./js/options.js'],
    'js/providers/10minutemail.js': ['./js/providers/10minutemail/content.js'],
    'js/providers/airmail.js': ['./js/providers/airmail/content.js'],
    'js/providers/guerrillamail.js': ['./js/providers/guerrillamail/content.js'],
    'js/providers/throwawaymail.js': ['./js/providers/throwawaymail/content.js'],
    'js/providers/tempmail.js': ['./js/providers/tempmail/content.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less?noIeCompat'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=1000000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file'
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './[name]'
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'manifest.json'
    }, {
      from: 'img/icons/*'
    }, {
      from: 'html/*'
    }]),
    new CleanWebpackPlugin(['dist'], {
      verbose: true
    })
  ]
}
