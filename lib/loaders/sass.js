const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const checkModules = require('@feizheng/check-modules');

module.exports = function(inOptions) {
  if (checkModules(['node-sass', 'sass-loader'])) {
    return Object.assign(
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      inOptions
    );
  }
};
