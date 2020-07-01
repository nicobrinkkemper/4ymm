import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Batches.css';
import { level, getLevelData, levelData, releaseDays } from 'levelData';


function Batch() {
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
        const isUnreleased = levelData.releasedBatches.length >= level.batchNumber
        if (isNew) classList.push('isNew')
        else if (isUnreleased) classList.push('isUnreleased')
        if(isUnreleased) return <span>This batch is not released yet!</span>
        return ("Hi")
      })}
    </div>
  )
}
export default Batch;