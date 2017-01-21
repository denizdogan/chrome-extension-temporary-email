import path from 'path'

import CopyWebpackPlugin from 'copy-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default {
  context: path.join(__dirname, 'src'),
  entry: {
    // basics
    'js/background.js': ['./js/background.js'],
    'js/content.js': ['./js/content.js'],

    // providers
    'js/providers/tenminutemail.js': ['./js/providers/tenminutemail/content.js'],
    'js/providers/airmail.js': ['./js/providers/airmail/content.js'],
    'js/providers/guerrillamail.js': ['./js/providers/guerrillamail/content.js'],
    'js/providers/throwawaymail.js': ['./js/providers/throwawaymail/content.js'],
    'js/providers/tempmail.js': ['./js/providers/tempmail/content.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './[name]'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'manifest.json' },
      { from: 'img/icons/*' },
    ])
  ],
  devtool: 'source-map'
}
