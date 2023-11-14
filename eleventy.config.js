// Lightning CSS Plugin
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");

module.exports = function (eleventyConfig) {
    // add passthrough copy imgs
    eleventyConfig.addPassthroughCopy("src/assets/img");
    // add lightningcss
    eleventyConfig.addPlugin(lightningCSS);
    // override default config
    return {
      dir: {
        input: "src",
        output: "www"
      }
    };
  };