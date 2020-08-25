const webpack = require('webpack');
const nxNiceCommets = require('@feizheng/next-nice-comments');
const pkg = require('@feizheng/next-absolute-package')();

module.exports = function (inOptions) {
  return new webpack.BannerPlugin(
    Object.assign(
      {
        banner: nxNiceCommets(
          [
            'name: ' + pkg.name,
            'description: ' + pkg.description,
            'homepage: ' + pkg.homepage,
            'version: ' + pkg.version,
            'date: ' + new Date().toISOString(),
            'license: ' + pkg.license
          ],
          'js'
        )
      },
      inOptions
    )
  );
};
