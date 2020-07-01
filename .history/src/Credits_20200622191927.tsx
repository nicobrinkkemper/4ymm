import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Level.css';
import { level, getLevelData, levelData, releaseDays, todayStart, defaultLevelData } from 'levelData';
import { useParams } from 'react-router-dom';
import { snakeCase, lowerCase } from 'lodash';
import Stars from 'Stars';
import Button from 'Button';

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
  const makerPath = (makerName: string, width: number = 500) => `./makerImages/${transformName(makerName)}-${width}.png`
  const tags = level.tags.split(',');
  const hasPreviousLevel = Number(order)>1;
  const hasNextLevel = batchLevels.length > Number(order);
  const navigationClasslist = ['navigation']
  if(hasPreviousLevel) navigationClasslist.push('hasPreviousLevel')
  if(hasNextLevel) navigationClasslist.push('hasNextLevel')
  if (isNew) classList.push('isNew')
  if (isUnreleased) return <span>...</span>
  return (
    <div className="Credits">
      
    </div>
  )
}
export default Level;