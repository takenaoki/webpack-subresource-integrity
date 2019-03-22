var webpackVersion = Number(
  require('webpack/package.json').version.split('.')[0]
);

var hwpVersion = Number(
  require('html-webpack-plugin/package.json').version.split('.')[0]
);

module.exports.skip = function skip() {
  // mini-css-extract-plugin needs Webpack 4
  // critters--webpack-plugin doesn't yet seem to work with HWP 4+
  return webpackVersion < 4 || hwpVersion > 3;
};
