const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const { getLoader, loaderByName } = require('@craco/craco');

module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */,
    style: {
        postcss: {
            env: {
                stage: 3,
                features: {
                    "nesting-rules": true
                },
                autoprefixer: {
                    cascade: true
                }
            }
        },
    },
    webpack: {
        alias: {},
        plugins: [],
        configure: (webpackConfig, { env, paths }) => {
            const config = { ...webpackConfig };
            const urlLoader = getLoader(config, loaderByName('url-loader'));
            const loader = urlLoader.match.loader;
            loader.use = [
                {
                    loader: loader.loader,
                    options: Object.assign({}, loader.options),
                },
                {
                    loader: 'csv-loader',
                    options: {
                        dynamicTyping: true,
                        header: true,
                        skipEmptyLines: true
                    },
                },
            ];

            delete loader.loader;
            delete loader.options;

            return config;
        }
    }
}