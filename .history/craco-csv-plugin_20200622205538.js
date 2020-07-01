const { getLoader, loaderByName } = require('@craco/craco');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions }) => {
    const config = { ...webpackConfig };

    const csvLoader = getLoader(config, loaderByName('csv-loader'));
    const loader = urlLoader.match.loader;
    console.log(csvLoader)
    loader.use = [
      {
        loader: loader.loader,
        options: Object.assign({}, loader.options),
      },
      {
        loader: 'csv-loader',
        options: pluginOptions,
      },
    ];

    delete loader.loader;
    delete loader.options;

    return config;
  },
};