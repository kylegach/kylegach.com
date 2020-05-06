let markdownIt = require('markdown-it');
let taskLists = require('markdown-it-task-lists');

let markdownItOptions = {
  breaks: true,
  html: true,
  linkify: true,
  typographer: true
};

let md = markdownIt(markdownItOptions).use(taskLists, { label: true });

module.exports = function(config) {
  config.addCollection('writing', (collection) => {
    return [
      ...collection.getFilteredByGlob('./src/writing/*/*.md')
    ].reverse();
  });

  config.addPassthroughCopy('./src/img');
  config.addPassthroughCopy('./src/styles');
  
  config.setLibrary('md', md);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
  };
};
