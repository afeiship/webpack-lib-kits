const appPath = require('app-root-path').path;
const path = require('path');
const checkModules = require('@feizheng/check-modules');

module.exports = function() {
  const pkg = require(path.join(appPath, 'package.json'));
  if (checkModules(['string-replace-webpack-plugin'])) {
    const StringReplacePlugin = require('string-replace-webpack-plugin');
    return {
      test: /index\.js$/,
      loader: StringReplacePlugin.replace({
        replacements: [
          Object.assign(
            {
              pattern: '__VESION__',
              replacement: function() {
                return pkg.version;
              }
            },
            inOptions
          )
        ]
      })
    };
  }
};
