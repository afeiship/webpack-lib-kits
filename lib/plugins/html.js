const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('path').resolve;
const appRoot = require('app-root-path').path;

module.exports = function(inOptions) {
  var options = Object.assign(
    {
      favicon: resolve(appRoot, 'public/assets/favicon.ico'),
      template: resolve(appRoot, 'public/index.ejs')
    },
    inOptions
  );
  return new HtmlWebpackPlugin(options);
};
