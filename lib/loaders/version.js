const checkModules = require('@jswork/check-modules');
const nxAbsPkg = require('@jswork/next-absolute-package');

module.exports = function(inOptions) {
  if (checkModules(['string-replace-webpack-plugin'])) {
    const StringReplacePlugin = require('string-replace-webpack-plugin');
    const version = nxAbsPkg('version');
    return {
      test: /index\.js$/,
      loader: StringReplacePlugin.replace({
        replacements: [
          Object.assign(
            {
              pattern: '__VERSION__',
              replacement: function() {
                return version;
              }
            },
            inOptions
          )
        ]
      })
    };
  }
};
