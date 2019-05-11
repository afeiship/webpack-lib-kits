const resolve = require('path').resolve;
const appRoot = require('app-root-path').path;

module.exports = function(inOptions) {
  return Object.assign(
    {
      filename: 'index.js',
      library: 'BoilerplateReactComponent',
      libraryTarget: 'umd'
    },
    inOptions
  );
};
