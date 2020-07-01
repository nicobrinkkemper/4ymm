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
            return webpackConfig
        }
    }
}