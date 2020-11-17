const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const checkModules = require('@jswork/check-modules');

module.exports = function (inOptions) {
  if (checkModules(['node-sass', 'sass-loader'])) {
    const isDev = process.env.NODE_ENV === 'development';
    return Object.assign(
      {
        test: /\.scss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      inOptions
    );
  }
};
