
import React from 'react';
import CountDown, { CountdownRenderProps } from 'react-countdown';
import logo from './logo2.svg';
import logoFallback from './logo2.png';
import './App.css';
import YouTube from 'react-youtube';

function App() {
  return (
    <div className="App">
      <div className="ie-fixMinHeight">
      <article className="App-header">
        <picture>
          <source srcSet={logo} type="image/svg+xml" />
          <img src={logoFallback} className="App-logo" alt="logo" />
        </picture>
        </article>
        <article className="App-body">
         
        </article>
      </div>
    </div>
  );
}

export default App;
