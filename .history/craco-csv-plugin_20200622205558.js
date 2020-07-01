const { getLoader, loaderByName } = require('@craco/craco');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions }) => {
    const config = { ...webpackConfig };

    const csvLoader = getLoader(config, loaderByName('csv-loader'));
    console.log(csvLoader)
    const loader = csvLoader.match.loader;
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