import React, { useEffect, useState } from 'react'

import Card from 'Card';
import './Batches.css';
import { level, getLevelData, levelData, releaseDays, todayStart } from 'levelData';
import { useParams } from 'react-router-dom';


function Batch() {
  const { batchNumber } = useParams();
  const [levelData, setLevelData] = useState<levelData>({
    levels:[],
    newestBatch:0,
    releasedBatches:[]
  })
  useEffect(() => {
    getLevelData().then(setLevelData)
  }, [])
  const classList = ["Level"];
  const isNew = levelData.newestBatch === Number(batchNumber)
  
  const isUnreleased = todayStart.getTime() <= releaseDays[batchNumber].getTime()
  if (isNew) classList.push('isNew')
  if(isUnreleased) return <span>This batch is not released yet!</span>
  return (
    <div className="Batch">
      Hi
    </div>
  )
}
export default Batch;