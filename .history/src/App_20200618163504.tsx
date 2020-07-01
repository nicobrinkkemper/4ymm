
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
import levels = require('data/4YMM Info Sheet - Sheet1.csv')
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
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
            <a href="https://discord.gg/yqdgu2Z" target="_BLANK">Discord</a>
            <a href="https://www.youtube.com/channel/UClayAs7TxVjMbzBLxBbqyoQ" target="_BLANK">Youtube</a>
            <Link to="/credits">Credits</Link>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
