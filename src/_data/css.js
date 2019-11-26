// CSS is included a data file so it can be compiled and inlined at runtime
// Individual files are also generated by `/site/css.njk`

const { compileSassTargets } = require("../utils/compile-scss");

// Add SCSS compilation targets here
const targets = {
  critical: "src/_assets/sass/critical.scss",
  additional: "src/_assets/sass/additional.scss"
};

// Create an object with the compiled CSS for each key in targets
module.exports = compileSassTargets(targets);
