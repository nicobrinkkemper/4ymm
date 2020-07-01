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
  const levelPath = (levelName:string, width:number = 480)=>`./levelImages/${snakeCase(levelName)}-${width}.png`
  if (isNew) classList.push('isNew')
  if(isUnreleased) return <span>...</span>
  return (
    <div className="Batch">
      <h1>{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(releaseDay)}</h1>
      {batchLevels.map((level, i) => {
          return <Card key={String(i)} to={`/level/${level.order}`} >
            <div className={"LevelCard"}>
              <span className={"levelName"}>
                <picture>
                  <source srcSet={`
                  ${levelPath(level.levelName,480)} 1x,
                  ${levelPath(level.levelName,960)} 2x,
                  ${levelPath(level.levelName,1280)} 3x,
                  ${levelPath(level.levelName,1920)} 4x`
                  } />
                  <img src={`${level.levelName}-480.png`} style={{height:'6.125rem',height:'6.125rem'}} />
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