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
enum csvHeaders = {
    0 = "order"
    1 = "batchNumber"
    2 = "levelName"
    3 = "makerName"
    4 = "discordName"
    5 = "progress"
    6 = "difficulty"
    7 = "gameStyle"
    8 = "mainTheme"
    9 = "subTheme"
    10 = "briefDescription"
    11 = "region"
    12 = "clearCondition"
    13 = "averageClearTime"
    14 = "description"
    15 = "makerDescription"
    16 = "makerId"
    17 = "difficulty"
    18 = "tags"
    19 = "nationality"
    20 = "levelCode"
}
export const getLevelData = memoizeOne(() => {
    console.log('LOADING LEVEL DATA')
    const levels: level[] = []
    console.log(data)
    const releasedBatches = releaseDays.filter(level => level.getTime() < todayStart.getTime())
    const newestBatch = releaseDays.indexOf(releasedBatches.sort((a, b) => {
        return (todayStart.getTime() - a.getTime()) - (todayStart.getTime() - b.getTime())
    })[0])
    return {
        levels,
        releasedBatches,
        newestBatch
    } as levelData
});