import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Batch.css';
import { level, getLevelData, levelData, releaseDays, todayStart } from 'levelData';
import { useParams } from 'react-router-dom';
import {snakeCase} from 'lodash'
function Batch() {
  const { batchNumber } = useParams();
  const releaseDay = releaseDays[batchNumber-1]
  const [levelData, setLevelData] = useState<levelData>({
    levels:[],
    newestBatch:0,
    releasedBatches:[]
  })
  useEffect(() => {
    getLevelData().then(setLevelData)
  }, [])
  const classList = ["Batch"];
  const isNew = levelData.newestBatch === batchNumber-1
  const batchLevels = levelData.levels.filter(({batchNumber:_batchNumber})=>Number(_batchNumber)===Number(batchNumber))
  const isUnreleased = levelData.releasedBatches.indexOf(releaseDay) === -1
  if (isNew) classList.push('isNew')
  if(isUnreleased) return <span>...</span>
  return (
    <div className="Batch">
      <h1>{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(releaseDay)}</h1>
      {batchLevels.map((level, i) => {
          const levelPath = `./levelImages/${snakeCase(level.levelName)}-480.png`
          return <Card key={String(i)} to={`/level/${level.order}`} >
            <div className={"LevelCard"}>
              <span className={"levelName"}>
                <picture>
                  <source srcSet={`
                  ./levelImages/${level.levelName}-480.png 1x,
                  ./levelImages/${level.levelName}-960.png 2x,
                  ./levelImages/${level.levelName}-1280.png 3x,
                  ./levelImages/${level.levelName}-1920.png 4x`
                  } />
                  <img src={`${level.levelName}-480.png`} />
                </picture>
                {level.levelName}
              </span>
            </div>
          </Card>
      })}
    </div>
  )
}
export default Batch;