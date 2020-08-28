// Reference: https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/config/default-config.js#L371

module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
