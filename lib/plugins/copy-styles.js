const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (inOptions) {
  return new CopyWebpackPlugin({
    patterns: [{ from: './src/components/style.scss', to: '.' }]
  });
};
