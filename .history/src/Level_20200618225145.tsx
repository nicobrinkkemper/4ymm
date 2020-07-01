import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Level.css';
import { level, getLevelData, levelData, releaseDays, todayStart } from 'levelData';
import { useParams } from 'react-router-dom';


function Level() {
  const { order } = useParams();
  const releaseDay = releaseDays[batchNumber-1]
  const [levelData, setLevelData] = useState<levelData>({
    levels:[],
    newestBatch:0,
    releasedBatches:[]
  })
  useEffect(() => {
    getLevelData().then(setLevelData)
  }, [])
  const level = levelData.levels.find(({order:_order})=>Number(_order) === Number(order)) || {
    levels:[],
    newestBatch:0,
    releasedBatches:[]
  }
  const batchNumber = level.batchNumber
  const classList = ["Level"];
  const isNew = levelData.newestBatch === batchNumber-1
  const batchLevels = levelData.levels.filter(({batchNumber:_batchNumber})=>Number(_batchNumber)===Number(batchNumber))
  const isUnreleased = levelData.releasedBatches.indexOf(releaseDay) === -1
  if (isNew) classList.push('isNew')
  if(isUnreleased) return <span>...</span>
  return (
    <div className="Level">
      <h1>{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(releaseDay)}</h1>
      {batchLevels.map((level, i) => {
          return <Card key={String(i)} to={`/level/${level.order}`} >
            <div className={"LevelCard"}>
              <span className={"levelName"}>
                {level.levelName}
              </span>
            </div>
          </Card>
      })}
    </div>
  )
}
export default Level;