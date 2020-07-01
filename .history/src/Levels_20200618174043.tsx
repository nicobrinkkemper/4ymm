import React, { useEffect } from 'react'

import csv from 'csv-parser'
const { Readable } = require('stream');
const levels = require('./data/4YMM Info Sheet - Sheet1.csv')

const webpackCsvDownloader = require.context(
  '!raw-loader!./data',
  false,
  /\.csv$/,
);
const csvFiles = webpackCsvDownloader
  .keys()
  .map(filename => webpackCsvDownloader(filename));


function Levels() {
  useEffect(()=>{

  },[])
  return (

    )
}
export default Levels;