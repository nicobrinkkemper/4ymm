const { getLoader, loaderByName } = require('@craco/craco');
const { addBeforeLoader } = require('@craco/craco/lib/loaders');
module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions }) => {
    const config = { ...webpackConfig };
    const fragLoader = {
      test: /\.frag$/,
      use: ['raw-loader']
   };
    addBeforeLoader(config, loaderByName("file-loader"), fragLoader );
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