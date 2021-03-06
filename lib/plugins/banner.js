const webpack = require('webpack');
const nxNiceCommets = require('@jswork/next-nice-comments');
const pkg = require('@jswork/next-absolute-package')();

// https://webpack.js.org/plugins/banner-plugin/

module.exports = function (inOptions) {
  return new webpack.BannerPlugin(
    Object.assign(
      {
        entryOnly: true,
        banner: nxNiceCommets(
          [
            'name: ' + pkg.name,
            'description: ' + pkg.description,
            'homepage: ' + pkg.homepage,
            'version: ' + pkg.version,
            'date: ' + new Date().toISOString(),
            'license: ' + pkg.license
          ],
          'raw'
        )
      },
      inOptions
    )
  );
};
