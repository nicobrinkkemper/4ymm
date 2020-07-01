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
const nameLevelKeys = (levelArr:[string[]])=>levelArr.reduce(
(prev,levelRow,i)=>([
    ...prev,
    {
        order:  Number(levelRow[csvHeaders['order']]),
        batchNumber: Number(levelRow[csvHeaders['batchNumber']]),
        levelName: levelRow[csvHeaders['levelName']],
        description: levelRow[csvHeaders['description']],
        makerDescription: levelRow[csvHeaders['makerDescription']],
        makerName: levelRow[csvHeaders['makerName']],
        nationality: levelRow[csvHeaders['nationality']],
        difficulty: Number(levelRow[csvHeaders['difficulty']]),
        tags: levelRow[csvHeaders['tags']]
    }
]),  [] as level[])
export const getLevelData = memoizeOne(() => {
    console.log('LOADING LEVEL DATA')
    const [header,...levels] = (data as [keyof typeof csvHeaders,string[]])
    // here we do a check if all headers are still correct
    let  i = 0;
    for(let head of header){
        let v = csvHeaders[head as keyof typeof csvHeaders];
        console.log({head,i,v})
        if(!(typeof v === 'number' && i === v)) throw(new Error('CSV HAS CHANGED'))
        i++
    }
    const releasedBatches = releaseDays.filter(releaseDay => releaseDay.getTime() < todayStart.getTime())
    const newestBatch = releaseDays.indexOf(releasedBatches.sort((a, b) => {
        return (todayStart.getTime() - a.getTime()) - (todayStart.getTime() - b.getTime())
    })[0])
    return {
        levels:(batchNumber:number)=>{
            levels.filter(level=>{

            })
        },
        releasedBatches,
        newestBatch,
    } as levelData
});