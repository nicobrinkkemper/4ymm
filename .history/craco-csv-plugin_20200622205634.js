const { getLoader, loaderByName } = require('@craco/craco');
const 
module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions }) => {
    const config = { ...webpackConfig };

    console.log(csvLoader)
    const loader = csvLoader.match.loader;
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