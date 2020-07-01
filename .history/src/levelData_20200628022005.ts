import memoizeOne from 'memoize-one';
//@ts-ignore
import data from "./data/4YMM Info Sheet - Sheet1.csv"
export const startDateString = '28 Jun 2020 01:39:00 GMT'
export const startDate = new Date(Date.parse(startDateString))
export const releaseDays = [
    startDate,
    new Date(Date.parse('5 Jul 2020 15:00:00 GMT')),
    new Date(Date.parse('12 Jul 2020 15:00:00 GMT')),
    new Date(Date.parse('19 Jul 2020 15:00:00 GMT')),
    new Date(Date.parse('26 Jul 2020 15:00:00 GMT')),
]
// export const todayStart: Date = function () {
//     const d = new Date();
//     d.setHours(0, 0, 0, 0);
//     return d
// }()

export type level = {
    order: number;
    batchNumber: number;
    levelName: string;
    description: string;
    makerDescription: string;
    makerName: string;
    nationality: string;
    difficulty: number;
    tags: string;
}
export type levelData = {
    level: (order: number) => level;
    levels: (batchNumber: number) => level[];
    batch: (batchNumber: number) => string[][];
    releasedBatches: Date[];
    newestBatch: number;
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
const createLevel = (levelRow: string[])=>(
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
export const isReleased = (releaseDay:Date)=>releaseDay.getTime() <= Date.now()
export const getLevelData = memoizeOne(() => {
    const [header,...levelRows] = (data as [keyof typeof csvHeaders, ...string[][]])
    // here we do a check if all headers are still correct
    let  i = 0;
    for(const head of header){
        const v = csvHeaders[head as keyof typeof csvHeaders];
        
        if(!(typeof v === 'number' && i === v)) throw(new Error('CSV HAS CHANGED'))
        i++
    }
    const releasedBatches = releaseDays.filter(isReleased)
    const newestBatch = releaseDays.indexOf(releasedBatches.sort((a, b) => {
        return (Date.now() - a.getTime()) - (Date.now() - b.getTime())
    })[0])
    const batch = (batchNumber: number)=>{
        if(typeof batchNumber !== 'number') throw(new TypeError('batchNumber should be number'))
        return levelRows.filter(level=>Number(level[csvHeaders['batchNumber']]) === batchNumber)
    }
    const level = (order: number)=>{
        if(typeof order !== 'number') throw(new TypeError('order should be number'))
        return createLevel(levelRows.find(level=>Number(level[csvHeaders['order']]) === order) || [])
    }
    const levels = (batchNumber: number)=>{
        if(typeof batchNumber !== 'number') throw(new TypeError('batchNumber should be number'))
        levelRows.filter(level=>{
            return Number(level[csvHeaders['batchNumber']]) === batchNumber
        })
        return batch(batchNumber).map(createLevel)
    }
    return {    
        level,
        levels,
        batch,
        releasedBatches,
        newestBatch,
    } as levelData
});