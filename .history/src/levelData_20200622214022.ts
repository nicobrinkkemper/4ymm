import csv from 'csv-parser'
import memoizeOne from 'memoize-one';
//@ts-ignore
import data from "./data/4YMM Info Sheet - Sheet1.csv"

export const releaseDays = [
    new Date(2020, 4, 28),
    new Date(2020, 5, 5),
    new Date(2020, 5, 12),
    new Date(2020, 5, 19),
    new Date(2020, 5, 26),
]
export const todayStart: Date = function () {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d
}()

export const defaultLevelData = {
    batchNumber: 0,
    levelName: '',
    description: '',
    makerDescription: '',
    makerName: '',
    nationality: '',
    difficulty: 0,
    tags: '',
}
export type level = {
    order: number
    batchNumber: number
    levelName: string,
    description: string,
    makerDescription: string,
    makerName: string,
    nationality: string,
    difficulty: number,
    tags: string,
}
export type levelData = {
    "levels": level[]
    "releasedBatches": Date[]
    "newestBatch": number
}
enum csvHeaders {
    "order" = 0,
    "batchNumber" = 0,
    "levelName" = 0,
    "makerName" = 0,
    "discordName" = 0,
    "progress" = 0,
    "difficultyName" = 0,
    "gameStyle" = 0,
    "mainTheme" = 0,
    "subTheme" = 0,
    "briefDescription" = 0,
    "region" = 0,
    "clearCondition" = 0,
    "averageClearTime" = 0,
    "description" = 0,
    "makerDescription" = 0,
    "makerId" = 0,
    "difficulty" = 0,
    "tags" = 0,
    "nationality" = 0,
    "levelCode" = 0,
}
export const getLevelData = memoizeOne(() => {
    console.log('LOADING LEVEL DATA')
    const [header,...levels] = (data as [string[]])
    let  i = 0;
    for(let head in header){
        i++
        if(typeof csvHeaders[head] === 'number' && i === csvHeaders[head]) throw(new Error('CSV HAS CHANGED'))
    }
    const releasedBatches = releaseDays.filter(level => level.getTime() < todayStart.getTime())
    const newestBatch = releaseDays.indexOf(releasedBatches.sort((a, b) => {
        return (todayStart.getTime() - a.getTime()) - (todayStart.getTime() - b.getTime())
    })[0])
    return {
        levels,
        releasedBatches,
        newestBatch,
    } as levelData
});