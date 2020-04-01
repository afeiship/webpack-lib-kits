module.exports = function(inOptions) {
  return new webpack.optimize.LimitChunkCountPlugin(
    Object.assign(
      {
        maxChunks: 1
      },
      inOptions
    )
  );
};
