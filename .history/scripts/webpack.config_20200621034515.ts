import * as path from 'path';
import * as webpack from 'webpack';
import * as fs from 'fs'

const levelsDir = path.join(__dirname, 'levels');
const levels = fs.readdirSync(levelsDir).map(v => levelsDir + '/' + v);
console.log(levelsDir)
const config: webpack.Configuration = {
  mode: 'production',
  entry: levels,
  output: {
    path: path.resolve(__dirname, 'levelImages'),
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'levelImages',
    filename: 'images.bundle.mjs'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.png'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        include: [
          levelsDir
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: "[name]-[width].[ext]",
              sizes: [1920,1280,960],
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
};

export default config