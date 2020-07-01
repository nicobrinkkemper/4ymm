import React, { useEffect, useState } from 'react'

import csv from 'csv-parser'
const { Readable } = require('stream');
const levels = require('./data/4YMM Info Sheet - Sheet1.csv')

const webpackCsvDownloader = require.context(
  '!raw-loader!./data',
  false,
  /\.csv$/,
);
const csvFiles = webpackCsvDownloader
  .keys()
  .map(filename => webpackCsvDownloader(filename));


function Levels() {
  const [levels,setLevels] = useState([])
  useEffect(() => {
    const levelsStream = new Readable();
    levelsStream.push(Buffer.from(csvFiles[0].default));
    levelsStream.push(null);
    levelsStream
      .pipe(csv())
      .on('data', (data: object) => setLevels(data))
      .on('end', () => {
        console.log('got csv data');
      });
      return ()=>levelsStream.end()
  }, [])
  return (

  )
}
export default Levels;