import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Level.css';
import { level, getLevelData, levelData, releaseDays, todayStart, defaultLevelData } from 'levelData';
import { useParams } from 'react-router-dom';
import { snakeCase } from 'lodash';

function Level() {
  const { order } = useParams();
  const [levelData, setLevelData] = useState<levelData>({
    levels: [],
    newestBatch: 0,
    releasedBatches: []
  })
  useEffect(() => {
    getLevelData().then(setLevelData)
  }, [])
  const level = levelData.levels.find(({ order: _order }) => Number(_order) === Number(order)) || defaultLevelData
  const batchNumber = Number(level.batchNumber || 0)
  const releaseDay = releaseDays[batchNumber - 1]
  const classList = ["Level"];
  const isNew = levelData.newestBatch === batchNumber - 1
  const batchLevels = levelData.levels.filter(({ batchNumber: _batchNumber }) => Number(_batchNumber) === Number(batchNumber))
  const isUnreleased = levelData.releasedBatches.indexOf(releaseDay) === -1
  const transformName = (name: string) => snakeCase(name.toLowerCase())
  const levelPath = (levelName: string, width: number = 480) => `./levelImages/${transformName(levelName)}-${width}.png`
  const makerPath = (makerName: string, width: number = 500) => `./levelImages/${snakeCase(makerName.toLowerCase())}-${width}.png`
  if (isNew) classList.push('isNew')
  if (isUnreleased) return <span>...</span>
  return (
    <div className="Level">
      <Card>
        <h1>{level.levelName}</h1>
        <picture>
          <source srcSet={`
                  ${levelPath(level.levelName, 480)} 480w,
                  ${levelPath(level.levelName, 960)} 960w,
                  ${levelPath(level.levelName, 1280)} 1280w,
                  ${levelPath(level.levelName, 1920)} 1920w`
          } />
          <img src={`${transformLevelName(level.levelName)}-480.png`} style={{ width: '100%', objectFit: 'cover' }} />
        </picture>
        <p className="makerName">{level.makerName}</p>
        <p className="description">{level.description}</p>
      </Card>
      <Card>
        <p className="makerDescription">{level.makerDescription}</p>
        <picture>
                  <source srcSet={`
                      ${makerPath(level.makerName, 250)} 250w,
                      ${makerPath(level.makerName, 500)} 500w,
                  `} />
                  <img src={`${level.makerName}-500.png`} style={{ height: '6.125rem', width: '6.125rem', objectFit: 'cover' }} />
                </picture>
      </Card>
    </div>
  )
}
export default Level;