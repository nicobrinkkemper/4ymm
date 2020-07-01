import React, { useEffect, useState } from 'react'

import csv from 'csv-parser'
import Card from 'Card';
import './Levels.css';
import { Link } from 'react-router-dom';
const { Readable } = require('stream');
const releaseDays = [
  new Date(2020, 4, 28),
  new Date(2020, 5, 5),
  new Date(2020, 5, 12),
  new Date(2020, 5, 19),
  new Date(2020, 5, 26),
]
const releasedBatches = releaseDays.filter(level => level.getTime() < Date.now())
const newestBatch = releaseDays.indexOf(releasedBatches.sort((a, b) => {
  return (new Date().getTime() - a.getTime()) - (Date.now() - b.getTime())
})[0])
const webpackCsvDownloader = require.context(
  '!raw-loader!./data',
  false,
  /\.csv$/,
);
const csvFiles = webpackCsvDownloader
  .keys()
  .map(filename => webpackCsvDownloader(filename));

type level = {
  "order": number
  "batchNumber": number
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
      {releaseDays.map((releaseDay, i) => {
        const classList = ["Batch"];
        const isNew = newestBatch === i
        const isUnreleased = releasedBatches.indexOf(releaseDay) === -1
        if (isNew) classList.push('isNew')
        else if (isUnreleased) classList.push('isUnreleased')
        return (<Card key={String(i)} disabled={isUnreleased} >
          <Link to="/levels/">
            <div className={classList.join(' ')}>
              <span className="batchNumber">{i + 1}</span>
              <div className="releaseInfo">
                <span className="releaseDay">{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(releaseDay)}</span>
                <span className="batchLevelAmount">{levels.filter(level => Number(level.batchNumber) === i + 1).length} levels</span>
              </div>
              {isNew ? <span className="new">New</span> : null}
              {isUnreleased ? <span className="unreleased">Unreleased</span> : null}
            </div>
          </Link>
        </Card>
        )
      })}
    </div>
  )
}
export default Levels;