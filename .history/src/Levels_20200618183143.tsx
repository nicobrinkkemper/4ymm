import React, { useEffect, useState } from 'react'

import csv from 'csv-parser'
import Card from 'Card';
const { Readable } = require('stream');
const levels = require('./data/4YMM Info Sheet - Sheet1.csv')
const releaseDays = [
  new Date(2020, 6, 28),
  new Date(2020, 7, 5),
  new Date(2020, 7, 12),
  new Date(2020, 7, 19),
  new Date(2020, 7, 26),
]
const webpackCsvDownloader = require.context(
  '!raw-loader!./data',
  false,
  /\.csv$/,
);
const csvFiles = webpackCsvDownloader
  .keys()
  .map(filename => webpackCsvDownloader(filename));

type level = {
  "order":number
  "batchNumber":number
}

function Levels() {
  const [levels, setLevels] = useState<level[]>([])
  useEffect(() => {
    const levelsStream = new Readable();
    levelsStream.push(Buffer.from(csvFiles[0].default));
    levelsStream.push(null);
    const levelData: level[] = [];
    levelsStream
      .pipe(csv())
      .on('data', (data: level) => levelData.push(data))
      .on('end', () => {
        setLevels(levelData)
      });
    return () => levelsStream.destroy()
  }, [])
  
  return (
    <div className="Levels">
      {releaseDays.map((releaseDay,i) => (
        <Card key={String(i)} >
            <span className="batchNumber">{i}</span>
            <span className="releaseDay">{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric'}).format(releaseDay)}</span>
      <span className="batchLevelAmount">{levels.filter(level=>level.batchNumber===i)}</span>
        </Card>
     ))}
    </div>
  )
}
export default Levels;