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
            module: {
                rules: [
                    {
                        test: /\.(png|jpg|gif)$/i,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 8192,
                                    keepQuery: true,
                                    fallback: require.resolve('responsive-loader'),
                                },
                            },
                        ],
                    },
                    {
                        test: /\.csv$/,
                        loader: 'csv-loader',
                        options: {
                            dynamicTyping: true,
                            header: true,
                            skipEmptyLines: true
                        }
                    }
                ]
            },
        },
    }
}