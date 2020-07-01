const path = require('path');

module.exports = {
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