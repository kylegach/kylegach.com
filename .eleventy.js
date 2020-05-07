let pluginRss = require("@11ty/eleventy-plugin-rss");
let markdownIt = require('markdown-it');
let taskLists = require('markdown-it-task-lists');

const WRITING_GLOB = './src/writing/*/*.md';

let markdownItOptions = {
  breaks: true,
  html: true,
  linkify: true,
  typographer: true
};

let md = markdownIt(markdownItOptions).use(taskLists, { label: true });

module.exports = function(config) {
  config.addCollection('feed', (collection) => {
    return [...collection.getFilteredByGlob(WRITING_GLOB)]
      .reverse()
      .slice(0,20);
  });
  config.addCollection('writing', (collection) => {
    return [...collection.getFilteredByGlob(WRITING_GLOB)]
      .reverse();
  });

  config.addPassthroughCopy({ './public': './' });
  config.addPassthroughCopy('./src/img');
  config.addPassthroughCopy('./src/styles');

  config.addPlugin(pluginRss);
  
  config.setLibrary('md', md);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
  };
};
