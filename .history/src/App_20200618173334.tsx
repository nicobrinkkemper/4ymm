
import React from 'react'

import './App.css';
import Logo from './Logo'
import { importMDX } from 'mdx.macro'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import csv from 'csv-parser'
const { Readable } = require('stream');
const levels = require('./data/4YMM Info Sheet - Sheet1.csv')

const webpackData = require.context(
  '!raw-loader!./data',
  false,
  /\.csv$/,
);
console.table(webpackData)
const levelsStream = new Readable();
levelsStream.push(Buffer.from(levels));
levelsStream.push(null);
const results:object[] = [];
levelsStream
  .pipe(csv())
  .on('data', (data:object) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });

const Welcome = importMDX.sync('./data/Welcome.mdx')

function App() {
  return (
    <Router>
      <div className="App">
        <div className="ie-fixMinHeight">
          <Switch>
            <Route path="/about">
              <header className="App-header">
                <Logo />
              </header>
              <article className="App-body">
                about
              </article>
            </Route>
            <Route path="/levels">
              <header className="App-header">
                <Logo svg="logo_without_card" />
              </header>
              <article className="App-body">
                levels
              </article>
            </Route>
            <Route path="/">
              <header className="App-header">
                <Logo />
              </header>
              <article className="App-body">
                <Welcome />
              </article>
            </Route>
          </Switch>
          <footer className="App-footer">
            <Link to="https://discord.gg/yqdgu2Z" rel="noopener noreferrer" target="_BLANK">Discord</Link>
            <Link to="https://www.youtube.com/channel/UClayAs7TxVjMbzBLxBbqyoQ" rel="noopener noreferrer" target="_BLANK">Youtube</Link>
            <Link to="/credits">Credits</Link>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
