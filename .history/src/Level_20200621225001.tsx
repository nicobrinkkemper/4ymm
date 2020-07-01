import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Level.css';
import { level, getLevelData, levelData, releaseDays, todayStart, defaultLevelData } from 'levelData';
import { useParams } from 'react-router-dom';
import { snakeCase, lowerCase } from 'lodash';

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
  if (isNew) classList.push('isNew')
  if (isUnreleased) return <span>...</span>
  return (
    <div className="Level">
      <Card>
        <div className="levelCard">
          <div className="info">
            <div className="makerInfo">
              <span className={"levelName"}>
                {level.levelName}
              </span>
              <div className={"makerName"}>
                <span className={`nationality flag-icon flag-icon-${lowerCase(level.nationality)}`} />
                <span className="name">{level.makerName}</span>
              </div>

            </div>
            <picture>
              <source srcSet={`
                  ${levelPath(level.levelName, 480)} 480w,
                  ${levelPath(level.levelName, 960)} 960w,
                  ${levelPath(level.levelName, 1280)} 1280w,
                  ${levelPath(level.levelName, 1920)} 1920w`
              } />
              <img src={`./levelImages/${transformName(level.levelName)}-480.png`} style={{ width: '100%', objectFit: 'cover' }} />
            </picture>
            <div className="levelCode">LEV-ELC-ODE</div>
            <div className="levelInfo">
              <div className={"tags"}>
                {tags.map((tag, i) => <span className="tag" key={i.toString()}>{tag}</span>)}
              </div>

              <div className={`difficulty`}>
                <span>Difficulty: </span><span className={`stars stars-${level.difficulty}`}><Stars value={level.difficulty} /></span>
              </div>
            </div>
          </div>
          <p className="description">{level.description}</p>

        </div>
      </Card>
      <Card>
        <picture className="mii">
          <source srcSet={`
              ${makerPath(level.makerName, 250)} 250w,
              ${makerPath(level.makerName, 500)} 500w,
          `} />
          <img src={`./makerImages/${transformName(level.makerName)}-500.png`} style={{ height: '6.125rem', width: '6.125rem', objectFit: 'cover' }} />
        </picture>
        <p className="makerDescription">{level.makerDescription}</p>
      </Card>
    </div>
  )
}
export default Level;