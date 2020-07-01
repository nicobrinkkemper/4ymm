const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const { getLoader, loaderByName } = require('@craco/craco');
const csvPlugin = require('./craco-csv-plugin.js')
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
    plugins: [
        {
            plugin: csvPlugin,
            // image-webpack-plugin options
            options: {
                
            },
        }
    ]
}