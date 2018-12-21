const path = require('path');

// Webpack plugins
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  devServer: {
    contentBase: OUTPATH,
    port: 8100
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
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // Used for cleaning dist folder
    // argv.mode === 'production'
    //   ? new CleanWebpackPlugin(OUTPATH, {})
    //   : () => {}
    // Used to save a css file
    new MiniCssExtractPlugin({
      filename: 'generator.bundle.css',
      disable: false,
      allChunks: true
    })
  ]
});
