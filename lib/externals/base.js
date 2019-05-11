module.exports = function(inOptions) {
  return Object.assign(
    {
      classnames: 'classnames',
      noop: 'noop',
      react: 'react',
      'react-dom': 'react-dom',
      'object-assign': 'object-assign',
      'prop-types': 'prop-types'
    },
    inOptions
  );
};
