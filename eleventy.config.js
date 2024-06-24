module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addPassthroughCopy ("src/assets/");

  return {
    dir: {
      input: "src",
      output: "dist"
    },
  };
};