
import React, {lazy, Component, Suspense} from 'react'
import CountDown, { CountdownRenderProps } from 'react-countdown';

import './App.css';
import Logo from './components/Logo'
import YouTube from 'react-youtube';
import {importMDX} from 'mdx.macro'

function App() {
  return (
    <div className="App">
      <div className="ie-fixMinHeight">
        <header className="App-header">
          <Logo />
        </header>
        <article className="App-body">

        </article>
      </div>
    </div>
  );
}

export default App;
