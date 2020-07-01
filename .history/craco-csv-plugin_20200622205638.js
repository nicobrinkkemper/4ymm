const { getLoader, loaderByName } = require('@craco/craco');
const 
module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions }) => {
    const config = { ...webpackConfig };

    loader.use = [
      {
        loader: loader.loader,
        options: Object.assign({}, loader.options),
      },
      {
        loader: require.resolve('csv-loader'),
        options: pluginOptions,
      },
    ];

    delete loader.loader;
    delete loader.options;

    return config;
  },
};