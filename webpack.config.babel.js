import path from 'path'

import CopyWebpackPlugin from 'copy-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import webpack from 'webpack'

const pkg = require('./package.json')
const banner =
  'Temporary Email - ' +
  pkg.version +
  ' | ' +
  '(c) 2016, ' +
  new Date().getFullYear() +
  '  ' +
  pkg.author +
  ' | ' +
  pkg.license

export default {
  context: path.join(__dirname, 'src'),
  entry: {
    // basics
    'js/background.js': ['./js/background.js'],
    'js/content.js': ['./js/content.js'],

    // providers
    'js/providers/tenminutemail.js': [
      './js/providers/tenminutemail/content.js'
    ],
    'js/providers/nada.js': ['./js/providers/nada/content.js'],
    'js/providers/guerrillamail.js': [
      './js/providers/guerrillamail/content.js'
    ],
    'js/providers/throwawaymail.js': [
      './js/providers/throwawaymail/content.js'
    ],
    'js/providers/tempmail.js': ['./js/providers/tempmail/content.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './[name]'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{ from: 'manifest.json' }, { from: 'img/icons/*' }])
  ],
  optimization: {
    minimize: true
  },
  devtool: 'source-map'
}
