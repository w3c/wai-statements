const path = require('path');

// Webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Webpack environment vars
const OUTPATH = path.resolve(__dirname, 'content-images', 'wai-statements');

module.exports = (env, argv) => ({
  entry: {
    main: './_webpack/index.js'
  },
  output: {
    path: OUTPATH,
    filename: 'generator.bundle.js'
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
    // argv.mode === 'production'
    //   ? new CleanWebpackPlugin(OUTPATH, {})
    //   : () => {}
  ]
});
