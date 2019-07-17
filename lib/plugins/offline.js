const path = require('path');
const OfflinePlugin = require('offline-plugin');

module.exports = function(inOptions) {
  return new OfflinePlugin(
    Object.assign(
      {
        excludes: ['fallback.js'],
        ServiceWorker: {
          events: true
        }
      },
      inOptions
    )
  );
};
