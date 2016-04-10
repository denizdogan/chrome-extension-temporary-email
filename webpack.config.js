var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    // basics
    'js/background.js': ['./js/background.js'],
    'js/content.js': ['./js/content.js'],

    // options
    'options/index.js': ['./options/index.js'],

    // providers
    'js/providers/10minutemail.js': ['./js/providers/10minutemail/content.js'],
    'js/providers/airmail.js': ['./js/providers/airmail/content.js'],
    'js/providers/guerrillamail.js': ['./js/providers/guerrillamail/content.js'],
    'js/providers/throwawaymail.js': ['./js/providers/throwawaymail/content.js'],
    'js/providers/tempmail.js': ['./js/providers/tempmail/content.js']
  },
  module: {
    preLoaders: [
      // riotjs tag files
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'tag'
      }
    ],

    loaders: [
      // ecmascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },

      // stylesheets
      {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },

      // fonts
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000'
      }, {
        test: /\.(ttf|eot)$/,
        loader: 'file'
      },

      // bootstrap 3 w/ sass & jquery
      {
        test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports?jQuery=jquery'
      }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './[name]'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'manifest.json' },
      { from: 'img/icons/*' },
      { from: 'options/*.html' }
    ]),
    new CleanWebpackPlugin(
      ['dist'],
      { verbose: true }
    )
  ]
}
