const nxNiceCommets = require('@feizheng/next-nice-comments');
const nxAbsPkg = require('@feizheng/next-absolute-package');

module.exports = function (inOptions) {
  return new webpack.BannerPlugin(
    Object.assign(
      {
        banner: nxNiceCommets(
          [
            'name: ' + +nxAbsPkg('name'),
            'description: ' + nxAbsPkg('description'),
            'homepage: ' + nxAbsPkg('homepage'),
            'version: ' + nxAbsPkg('version'),
            'date: ' + new Date().toISOString(),
            'license: ' + nxAbsPkg('license')
          ],
          'js'
        )
      },
      inOptions
    )
  );
};
