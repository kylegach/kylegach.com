// Reference: https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/config/default-config.js#L425

module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        bypass: 'off',
        'meta-description': 'off',
        'is-crawlable': 'off',
        'tap-targets': 'off',
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
