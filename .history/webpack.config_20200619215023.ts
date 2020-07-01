const path = require('path');

module.exports = {
  mode: 'development'
    module: {
      rules: [
        {
          test: /\.(jpe?g|png)$/i,
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp')
          }
        }
      ]
    },
  }