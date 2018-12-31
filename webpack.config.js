const path = require('path');

// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Webpack environment vars
const SRC_PATH = path.resolve(__dirname, '_generator', 'src');
const OUTPATH = path.resolve(__dirname, 'content-images', 'wai-statements');

console.log(SRC_PATH);

module.exports = () => ({
  entry: {
    main: path.resolve(SRC_PATH, 'index.js')
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
    // Used to save a css file
    new MiniCssExtractPlugin({
      filename: 'generator.bundle.css',
      disable: false,
      allChunks: true
    })
  ]
});
