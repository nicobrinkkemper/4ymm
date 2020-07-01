import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }
};

export default config;

export default {
    mode: 'development',
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