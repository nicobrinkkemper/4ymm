import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Batches.css';
import { level, getLevelData, levelData, releaseDays } from 'levelData';


function Batches() {
  const [levelData, setLevelData] = useState<levelData>({
    levels:[],
    newestBatch:0,
    releasedBatches:[]
  })
  useEffect(() => {
    getLevelData().then(setLevelData)
  }, [])

  return (
    <div className="Batches">
      {levelData.levels.map((level, i) => {
        const classList = ["Level"];
        const isNew = levelData.newestBatch === i
        const isUnreleased = levelData.releasedBatches.indexOf(levelData.level.batchNumber) === -1
        if (isNew) classList.push('isNew')
        else if (isUnreleased) classList.push('isUnreleased')
        return (<Card key={String(i)} disabled={isUnreleased} to={`/levels/${i+1}`}>
            <div className={classList.join(' ')}>
              <span className="batchNumber">{i + 1}</span>
              <div className="releaseInfo">
                <span className="releaseDay">{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(releaseDay)}</span>
                <span className="batchLevelAmount">{levelData.levels.filter(level => Number(level.batchNumber) === i + 1).length} levels</span>
              </div>
              {isNew ? <span className="new">New</span> : null}
              {isUnreleased ? <span className="unreleased">Unreleased</span> : null}
            </div>
        </Card>
        )
      })}
    </div>
  )
}
export default Batches;