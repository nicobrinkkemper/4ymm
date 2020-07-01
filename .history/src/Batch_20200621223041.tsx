import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Batch.css';
import { level, getLevelData, levelData, releaseDays, todayStart } from 'levelData';
import { useParams } from 'react-router-dom';
import { snakeCase, lowerCase } from 'lodash'
import Stars from 'Stars';
function Batch() {
  const { batchNumber } = useParams();
  const releaseDay = releaseDays[batchNumber - 1]
  const [levelData, setLevelData] = useState<levelData>({
    levels: [],
    newestBatch: 0,
    releasedBatches: []
  })
  useEffect(() => {
    getLevelData().then(setLevelData)
  }, [])
  const classList = ["Batch"];
  const isNew = levelData.newestBatch === batchNumber - 1
  const batchLevels = levelData.levels.filter(({ batchNumber: _batchNumber }) => Number(_batchNumber) === Number(batchNumber))
  const isUnreleased = levelData.releasedBatches.indexOf(releaseDay) === -1
  const levelName = (levelName: string, width: number = 480) => snakeCase(levelName.toLowerCase())
  const levelPath = (levelName: string, width: number = 480) => `./levelImages/${snakeCase(levelName.toLowerCase())}-${width}.png`
  if (isNew) classList.push('isNew')
  if (isUnreleased) return <span>...</span>
  return (
    <div className="Batch">
      <h1>{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(releaseDay)}</h1>
      {batchLevels.map((level, i) => {
        const tags = level.tags.split(',');
        return <Card key={String(i)} to={`/level/${batchNumber}/${level.order}`} >
          <div className={"LevelCard"}>
            <picture>
              <source srcSet={`
                  ${levelPath(level.levelName, 480)} 480w,
                  ${levelPath(level.levelName, 960)} 960w,
                  ${levelPath(level.levelName, 1280)} 1280w,
                  ${levelPath(level.levelName, 1920)} 1920w`
              } />
              <img src={`${level.levelName}-480.png`} style={{ height: '6.125rem', width: '6.125rem', objectFit: 'cover' }} />
            </picture>
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
              <div className="levelInfo">
                <div className={"tags"}>
                  {tags.map((tag, i) => <span className="tag" key={i.toString()}>{tag}</span>)}
                </div>
                
                <div className={`difficulty`}>
                  <span>Difficulty: </span><span className={`stars stars-${level.difficulty}`}><Stars value={level.difficulty} /></span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      })}
    </div>
  )
}
export default Batch;