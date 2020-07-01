import csv from 'csv-parser'
import memoizeOne from 'memoize-one';

const { Readable } = require('stream');
export const releaseDays = [
    new Date(2020, 4, 28),
    new Date(2020, 5, 5),
    new Date(2020, 5, 12),
    new Date(2020, 5, 19),
    new Date(2020, 5, 26),
]
export const todayStart:Date = function(){
    const d = new Date();
    d.setHours(0,0,0,0);
    return d
}()
const webpackCsvDownloader = require.context(
    '!raw-loader!./data',
    false,
    /\.csv$/,
);

export type level = {
    "order": number
    "batchNumber": number
    "levelName": string,
    "levelDescription": string
}
export type levelData = {
    "levels": level[]
    "releasedBatches": Date[]
    "newestBatch": number
}
export const csvFiles: {[key:string]:level} = webpackCsvDownloader
    .keys()
    .reduce((prev,filename) => ({...prev,[filename]:webpackCsvDownloader(filename).default}), {});

export const getLevelData = memoizeOne(async (fileName:string = "./4YMM Info Sheet - Sheet1.csv")=>{
    console.log('LOADING LEVEL DATA')
    const levels: level[] = []
    const levelsStream = new Readable();
    levelsStream.push(Buffer.from(csvFiles[fileName]));
    levelsStream.push(null);
    levelsStream
        .pipe(csv())
        .on('data', (data: level) => levels.push(data))
    await new Promise((resolve,reject)=>{
        levelsStream.on('end',resolve)
        levelsStream.on('error',reject)
    })
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