
import React from 'react'

import './App.css';
import Logo from './Logo'
import {importMDX} from 'mdx.macro'
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
          <a href="#">Discord</a>
          <a href="https://www.youtube.com/channel/UClayAs7TxVjMbzBLxBbqyoQ">Youtube</a>
          <a href="#">Credits</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
