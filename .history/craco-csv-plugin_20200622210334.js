const { getLoader, loaderByName } = require('@craco/craco');
const { addBeforeLoader } = require('@craco/craco/lib/loaders');
module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, options }) => {
    const config = { ...webpackConfig };
    const csvLoader = {
      test: /\.csv$/,
      use: ['csv-loader'],
      options:options
   };
    addBeforeLoader(config, loaderByName("file-loader"), csvLoader );
    


    return config;
  },
};