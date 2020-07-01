const path = require('path');

export default {
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