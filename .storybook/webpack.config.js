const webpack = require('webpack');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.plugins.push(new webpack.DefinePlugin({'process.env': {ANY_SEED: JSON.stringify(0.4070123094134033)}}));

  return defaultConfig;
};
