const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(inOptions) {
  return Object.assign(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    },
    inOptions
  );
};
