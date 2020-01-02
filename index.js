module.exports = {
  configs: {
    alias: require('./lib/configs/alias'),
    devServer: require('./lib/configs/dev-server'),
    devtool: require('./lib/configs/devtool'),
    extensions: require('./lib/configs/extensions'),
    mode: require('./lib/configs/mode')
  },
  externals: {
    base: require('./lib/externals/base')
  },
  inputs: {
    build: require('./lib/inputs/build'),
    dev: require('./lib/inputs/dev'),
    docs: require('./lib/inputs/docs')
  },
  loaders: {
    babel: require('./lib/loaders/babel'),
    css: require('./lib/loaders/css'),
    image: require('./lib/loaders/image'),
    sass: require('./lib/loaders/sass'),
    version: require('./lib/loaders/version')
  },
  outputs: {
    build: require('./lib/outputs/build'),
    dev: require('./lib/outputs/dev'),
    docs: require('./lib/outputs/docs')
  },
  plugins: {
    clean: require('./lib/plugins/clean'),
    copyAssets: require('./lib/plugins/copy-assets'),
    copyStyles: require('./lib/plugins/copy-styles'),
    copy: require('./lib/plugins/copy'),
    html: require('./lib/plugins/html'),
    minCssExtract: require('./lib/plugins/min-css-extract'),
    semver: require('./lib/plugins/semver')
  }
};
