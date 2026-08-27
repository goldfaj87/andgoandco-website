const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Static assets and the Decap CMS admin panel pass straight through to the build output.
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Human-readable date filter for templates: {{ post.date | postDate }}
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL d, yyyy");
  });

  // {% year %} in templates prints the current year (for footer copyright).
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Journal posts live as markdown files in src/journal-posts/, newest first.
  eleventyConfig.addCollection("journal", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/journal-posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
