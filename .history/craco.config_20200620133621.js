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
                            },
                          },
                        ],
                      },
                    {
                        test: /\.(jpe?g|png)$/i,
                        loader: require.resolve('responsive-loader'),
                        options: {
                            adapter: require('responsive-loader/sharp'),
                            name: 'static/media/[name]-[width].[hash:8].[ext]',
                            sizes: [300, 600, 800, 1200, 1600]
                        }
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