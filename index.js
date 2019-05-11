module.exports = {
  configs: {
    alias: require('./lib/configs/alias'),
    devServer: require('./lib/configs/dev-server'),
    extensions: require('./lib/configs/extensions'),
    mode: require('./lib/configs/mode')
  },
  externals: {
    base: require('./lib/externals/base')
  },
  inputs: {
    build: require('./lib/inputs/build'),
    dev: require('./lib/inputs/dev')
  },
  loaders: {
    babel: require('./lib/loaders/babel'),
    css: require('./lib/loaders/css'),
    image: require('./lib/loaders/image'),
    sass: require('./lib/loaders/sass')
  },
  outputs: {
    build: require('./lib/outputs/build'),
    dev: require('./lib/outputs/dev')
  },
  plugins: {
    clean: require('./lib/plugins/clean')
    copyAssets: require('./lib/plugins/copy-assets')
    copyStyles: require('./lib/plugins/copy-styles')
    html: require('./lib/plugins/html'),
    minCssExtract: require('./lib/plugins/min-css-extract'),
    semver: require('./lib/plugins/semver'),
  }
};