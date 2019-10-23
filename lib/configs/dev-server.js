module.exports = function(inOptions) {
  return Object.assign(
    {
      host: '0.0.0.0',
      stats: 'errors-only',
      compress: true
    },
    inOptions
  );
};
