const { getLoader, loaderByName } = require('@craco/craco');
module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions }) => {
    const config = { ...webpackConfig };
    
    config.loader.use = [
      {
        loader: loader.loader,
        options: Object.assign({}, loader.options),
      },
      {
        loader: require.resolve('csv-loader'),
        options: pluginOptions,
      },
    ];


    return config;
  },
};