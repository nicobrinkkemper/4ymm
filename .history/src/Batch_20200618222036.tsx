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
  
  const isUnreleased = levelData.releasedBatches.indexOf(releaseDays[batchNumber-1]) === -1
  if (isNew) classList.push('isNew')
  if(isUnreleased) return <span></span>
  return (
    <div className="Batch">
      <span className="releaseDay">{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(releaseDay)}</span>
    </div>
  )
}
export default Batch;