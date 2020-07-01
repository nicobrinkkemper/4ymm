
import React from 'react'

import './App.css';
import Logo from './Logo'
import Levels from './Levels'
import { importMDX } from 'mdx.macro'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
            <Route path="/levels/?id">
              <header className="App-header">
                <Logo svg="logo_without_card" />
              </header>
              <article className="App-body">
                LEVEL
              </article>
            </Route>
            <Route path="/levels" exact={true}>
              <header className="App-header">
                <Logo svg="logo_without_card" />
              </header>
              <article className="App-body">
                <Levels/>
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
