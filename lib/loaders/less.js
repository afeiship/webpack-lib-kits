const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (inOptions) {
  const isDev = process.env.NODE_ENV === 'development';
  return Object.assign(
    {
      test: /\.less$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    },
    inOptions
  );
};
