module.exports = function(config) {
  config.addCollection('writing', (collection) => {
    return [
      ...collection.getFilteredByGlob('./src/writing/*/*.md')
    ].reverse();
  });

  config.addPassthroughCopy('./src/img');
  config.addPassthroughCopy('./src/styles');

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
  };
};
