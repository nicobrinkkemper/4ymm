import * as path from 'path';
import * as webpack from 'webpack';
import * as fs from 'fs'

const levelsDir = path.join(__dirname, 'levels');
const levels = fs.readdirSync(levelsDir);
console.log(levels)
const config: webpack.Configuration = {
  mode: 'production',
  entry: levels,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'csv.bundle.js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
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
};

export default config