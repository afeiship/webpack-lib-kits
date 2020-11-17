const checkModules = require('@jswork/check-modules');

module.exports = function(inOptions) {
  if (checkModules(['webpack-node-externals'])) {
    var nodeExternals = require('webpack-node-externals');
    return [nodeExternals(inOptions)];
  }
};
