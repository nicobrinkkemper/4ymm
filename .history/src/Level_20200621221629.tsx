import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Level.css';
import { level, getLevelData, levelData, releaseDays, todayStart, defaultLevelData } from 'levelData';
import { useParams } from 'react-router-dom';
import { snakeCase } from 'lodash';

function Level() {
  const { order } = useParams();
  const [levelData, setLevelData] = useState<levelData>({
    levels:[],
    newestBatch:0,
    releasedBatches:[]
  })
  useEffect(() => {
    getLevelData().then(setLevelData)
  }, [])
  const level = levelData.levels.find(({order:_order})=>Number(_order) === Number(order)) || defaultLevelData
  const batchNumber = Number(level.batchNumber||0)
  const releaseDay = releaseDays[batchNumber-1]
  const classList = ["Level"];
  const isNew = levelData.newestBatch === batchNumber-1
  const batchLevels = levelData.levels.filter(({batchNumber:_batchNumber})=>Number(_batchNumber)===Number(batchNumber))
  const isUnreleased = levelData.releasedBatches.indexOf(releaseDay) === -1
  const levelPath = (levelName: string, width: number = 480) => `./levelImages/${snakeCase(levelName)}-${width}.png`
  if (isNew) classList.push('isNew')
  if(isUnreleased) return <span>...</span>
  return (
    <div className="Level">
        <Card>
            <h1>{level.levelName}</h1>
            <picture>
              <source srcSet={`
                  ${levelPath(level.levelName, 480)} 1x,
                  ${levelPath(level.levelName, 960)} 2x,
                  ${levelPath(level.levelName, 1280)} 3x,
                  ${levelPath(level.levelName, 1920)} 4x`
              } />
              <img src={`${level.levelName}-480.png`} style={{ height: '6.125rem', width: '6.125rem', objectFit: 'cover' }} />
              </picture>
            <p className="makerName">{level.makerName}</p>
            <p className="description">{level.description}</p>
        </Card>
        <Card>
            <p className="makerDescription">{level.makerDescription}</p>
        </Card>
    </div>
  )
}
export default Level;