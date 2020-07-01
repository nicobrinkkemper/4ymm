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
    "levels": (batchNumber:number)=>level[]
    "releasedBatches": Date[]
    "newestBatch": number
}
enum csvHeaders {
    "order",
    "batchNumber",
    "levelName",
    "makerName",
    "discordName",
    "progress",
    "difficultyName",
    "gameStyle",
    "mainTheme",
    "subTheme",
    "briefDescription",
    "region",
    "clearCondition",
    "averageClearTime",
    "description",
    "makerDescription",
    "makerId",
    "difficulty",
    "tags",
    "nationality",
    "levelCode",
}
const rowToLevel = (levelRow:string[])=>(
    {
        order:  Number(levelRow[csvHeaders['order']]),
        batchNumber: Number(levelRow[csvHeaders['batchNumber']]),
        levelName: String(levelRow[csvHeaders['levelName']]),
        description: String(levelRow[csvHeaders['description']]),
        makerDescription: String(levelRow[csvHeaders['makerDescription']]),
        makerName: String(levelRow[csvHeaders['makerName']]),
        nationality: String(levelRow[csvHeaders['nationality']]),
        difficulty: Number(levelRow[csvHeaders['difficulty']]),
        tags: String(levelRow[csvHeaders['tags']])
    }
)
export const getLevelData = memoizeOne(() => {
    console.log('LOADING LEVEL DATA')
    const [header,...levels] = (data as [keyof typeof csvHeaders,string[]])
    // here we do a check if all headers are still correct
    let  i = 0;
    for(let head of header){
        let v = csvHeaders[head as keyof typeof csvHeaders];
        
        if(!(typeof v === 'number' && i === v)) throw(new Error('CSV HAS CHANGED'))
        i++
    }
    const releasedBatches = releaseDays.filter(releaseDay => releaseDay.getTime() < todayStart.getTime())
    const newestBatch = releaseDays.indexOf(releasedBatches.sort((a, b) => {
        return (todayStart.getTime() - a.getTime()) - (todayStart.getTime() - b.getTime())
    })[0])
    const getBatch = (batchNumber:number)=>levels.filter(level=>Number(level[csvHeaders['batchNumber']]) === batchNumber)
    return {
        levels:(batchNumber:number)=>getBatch(batchNumber).map(rowToLevel),
        batch:(batchNumber:number)=>levels.filter(level=>Number(level[csvHeaders['batchNumber']]) === batchNumber),
        releasedBatches,
        newestBatch,
    } as levelData
});