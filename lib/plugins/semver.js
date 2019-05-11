const SemverWebpackPlugin = require('semver-webpack-plugin');

module.exports = function(inOptions) {
  var options = Object.assign(
    {
      enabled: true,
      callback: function(inVersion) {
        return this.valid(this.coerce(inVersion));
      }
    },
    inOptions
  );
  return new SemverWebpackPlugin(options);
};
