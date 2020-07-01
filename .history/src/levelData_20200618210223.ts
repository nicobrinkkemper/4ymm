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
const csvFiles = webpackCsvDownloader
  .keys()
  .map(filename => webpackCsvDownloader(filename));

type level = {
  "order": number
  "batchNumber": number
}