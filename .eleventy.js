module.exports = function (eleventyConfig) {
  // Passthrough the Tailwind CSS build output to the /dist folder
  eleventyConfig.addPassthroughCopy({ 'dist/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/images': 'assets/images' });

  // Specify input and output directories
  return {
    dir: {
      input: 'src', // Source files will be in ./src
      includes: '_includes', // Nunjucks includes folder
      output: '_site', // Output folder will be ./dist
    },
  };
};
