
import React, {lazy, Component, Suspense} from 'react'

import './App.css';
import Logo from './Logo'
import {importMDX} from 'mdx.macro'
const Welcome = lazy(() => importMDX('./Welcome.mdx'))

function App() {
  return (
    <div className="App">
      <div className="ie-fixMinHeight">
        <header className="App-header">
          <Logo />
        </header>
        <article className="App-body">
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
          </Suspense>
        </article>
      </div>
    </div>
  );
}

export default App;
