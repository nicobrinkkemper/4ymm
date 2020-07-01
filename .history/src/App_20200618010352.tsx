
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

const Welcome = importMDX.sync('./Welcome.mdx')

function App() {
  return (
    <Router>
      <div className="App">
        <div className="ie-fixMinHeight">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
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
            <a href="/credits">Credits</a>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
