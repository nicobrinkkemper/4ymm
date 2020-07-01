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
                console.log(webpackConfig)
                return {
                    ...webpackConfig,
                module: {
                    rules: [
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