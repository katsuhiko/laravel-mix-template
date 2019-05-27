//
// see https://storybook.js.org/docs/configurations/custom-webpack-config/#using-your-existing-config
//
const path = require('path');
// your app's webpack.config.js
const custom = require('../node_modules/laravel-mix/setup/webpack.config.js');

module.exports = async ({ config, mode }) => {
  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};
