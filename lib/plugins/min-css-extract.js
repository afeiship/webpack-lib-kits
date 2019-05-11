const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(inOptions) {
  var options = Object.assign(
    {
      filename: './assets/styles/[name].[contenthash].css'
    },
    inOptions
  );
  return new MiniCssExtractPlugin(options);
};
