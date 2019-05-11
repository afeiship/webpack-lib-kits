const resolve = require('path').resolve;
const appRoot = require('app-root-path').path;

module.exports = function(inOptions) {
  return Object.assign(
    {
      '@': resolve(appRoot, 'src'),
      assets: resolve(appRoot, 'src/assets')
    },
    inOptions
  );
};
