const resolve = require('path').resolve;
const appRoot = require('app-root-path').path;

module.exports = function(inOptions) {
  return Object.assign(
    {
      path: resolve(appRoot, 'docs'),
      filename: './assets/bundle.[hash].js'
    },
    inOptions
  );
};
