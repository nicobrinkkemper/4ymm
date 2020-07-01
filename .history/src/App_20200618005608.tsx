
import React from 'react'

import './App.css';
import Logo from './Logo'
import {importMDX} from 'mdx.macro'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Welcome = importMDX.sync('./Welcome.mdx')

function App() {
  return (
    <div className="App">
      <div className="ie-fixMinHeight">
        <header className="App-header">
          <Logo />
        </header>
        <article className="App-body">
          <Welcome />
        </article>
        <footer className="App-footer">
          <a href="https://discord.gg/yqdgu2Z" target="_BLANK">Discord</a>
          <a href="https://www.youtube.com/channel/UClayAs7TxVjMbzBLxBbqyoQ" target="_BLANK">Youtube</a>
          <a href="/credits">Credits</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
