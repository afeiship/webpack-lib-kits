const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// https://github.com/webpack-contrib/mini-css-extract-plugin/issues/613

module.exports = function (inOptions) {
  const isDev = process.env.NODE_ENV === 'development';
  return Object.assign(
    {
      test: /\.css$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'css-loader',
        'postcss-loader'
      ]
    },
    inOptions
  );
};
