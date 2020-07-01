import * as path from 'path';
import * as webpack from 'webpack';
import * as fs from 'fs'

const levelsDir = path.join(__dirname, 'levels');
fs.readdirSync(directoryPath, function (err, files) {
  //handling error
  if (err) {
      return console.log('Unable to scan directory: ' + err);
  } 
  //listing all files using forEach
  files.forEach(function (file) {
      // Do whatever you want to do with the file
      console.log(file); 
  });
});

const config: webpack.Configuration = {
  mode: 'production',
  entry: './scripts/levelData.ts',
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
        options: {
          adapter: require('responsive-loader/sharp')
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
};

export default config