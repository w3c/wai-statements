const path = require('path');

// Webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Webpack environment vars
const OUTPATH = path.resolve(__dirname, 'assets', 'generator');

module.exports = (env, argv) => ({
  entry: {
    main: './_src/index.js'
  },
  output: {
    path: OUTPATH,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    // Used for cleaning dist folder
    argv.mode === 'production'
      ? new CleanWebpackPlugin(OUTPATH, {})
      : () => {}
  ]
});
