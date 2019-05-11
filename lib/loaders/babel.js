module.exports = function(inOptions) {
  return Object.assign(
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    inOptions
  );
};
