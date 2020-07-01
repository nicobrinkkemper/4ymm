const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");

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
        configure: {
            configure: (webpackConfig, { env, paths }) => {
                const {moduleConfig,...restWebpackConfig} = webpackConfig
                const {rulesConfig,...restmoduleConfig} = moduleConfig
                return {
                ...restWebpackConfig,
                module: {
                    ...restmoduleConfig,
                    rules: [
                        ...rulesConfig,
                        {
                            test: /\.csv$/,
                            use: [
                                {
                                    loader: 'csv-loader',
                                    options: {
                                        dynamicTyping: true,
                                        header: true,
                                        skipEmptyLines: true
                                    },
                                },
                            ],
                        }
                    ]
                },
            }; }
           
        },
    }
}