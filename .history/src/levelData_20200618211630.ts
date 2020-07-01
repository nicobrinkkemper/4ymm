import csv from 'csv-parser'
import { memo } from 'react';

const { Readable } = require('stream');
export const releaseDays = [
    new Date(2020, 4, 28),
    new Date(2020, 5, 5),
    new Date(2020, 5, 12),
    new Date(2020, 5, 19),
    new Date(2020, 5, 26),
]
export const releasedBatches = releaseDays.filter(level => level.getTime() < Date.now())
export const newestBatch = releaseDays.indexOf(releasedBatches.sort((a, b) => {
    return (new Date().getTime() - a.getTime()) - (Date.now() - b.getTime())
})[0])
const webpackCsvDownloader = require.context(
    '!raw-loader!./data',
    false,
    /\.csv$/,
);
export const csvFiles = webpackCsvDownloader
    .keys()
    .reduce((prev,filename) => ({...prev,[filename]:webpackCsvDownloader(filename)}), {});

export type level = {
    "order": number
    "batchNumber": number
}
export const levelData = memo(async (fileName:string)=>{
    const levelData: level[] = []
    const levelsStream = new Readable();
    levelsStream.push(Buffer.from(csvFiles['4YMM Info Sheet - Sheet1.csv'].default));
    levelsStream.push(null);
    levelsStream
        .pipe(csv())
        .on('data', (data: level) => levelData.push(data))
    await new Promise((resolve,reject)=>{
        levelsStream.on('end',resolve)
        levelsStream.on('error',reject)
    })
    return levelData
});