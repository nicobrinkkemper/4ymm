
import React, {lazy, Component, Suspense} from 'react'
import CountDown, { CountdownRenderProps } from 'react-countdown';

import './App.css';
import Logo from './components/Logo'
import YouTube from 'react-youtube';
import {importMDX} from 'mdx.macro'
import path from 'path'
const Welcome = React.lazy(() => importMDX('./components/Welcome.mdx'))

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
      </div>
    </div>
  );
}

export default App;
