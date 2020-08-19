const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (inOptions) {
  return new CopyWebpackPlugin([
    {
      from: './src/components/style.scss',
      to: '.'
    }
  ]);
};
