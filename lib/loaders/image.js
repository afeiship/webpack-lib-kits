module.exports = function(inOptions) {
  return Object.assign(
    {
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      loader: 'url-loader',
      options: {
        name: 'assets/images/[name]-[hash:4].[ext]',
        limit: 8192
      }
    },
    inOptions
  );
};
