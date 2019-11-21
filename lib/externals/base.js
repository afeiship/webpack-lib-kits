module.exports = function(inOptions) {
  return Object.assign(
    {
      classnames: 'classnames',
      react: 'react',
      'react-dom': 'react-dom',
      '@feizheng/noop': '@feizheng/noop',
      'object-assign': 'object-assign',
      'prop-types': 'prop-types'
    },
    inOptions
  );
};
