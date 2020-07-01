import React, { useEffect, useState } from 'react'

import csv from 'csv-parser'
import Card from 'Card';
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
  const [levels,setLevels] = useState<object[]>([])
  useEffect(() => {
    const levelsStream = new Readable();
    levelsStream.push(Buffer.from(csvFiles[0].default));
    levelsStream.push(null);
    const levelData: object[] = [];
    levelsStream
      .pipe(csv())
      .on('data', (data: object) => levelData.push(data))
      .on('end', () => {
        setLevels(levelData)
      });
      return ()=>levelsStream.end()
  }, [])
  return (
    <div className="Levels">{levels.map((level)=>(

    ))}</div>
  )
}
export default Levels;