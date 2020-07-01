import React from 'react';
import CountDown from 'react-countdown';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <picture>
          <source srcSet={logo} type="image/svg+xml" />
          <img src={logo} className="App-logo" alt="logo" />
        </picture>
        <p>
          Four years of MarioMaker
        </p>
        <h1>
          <strong>
          <CountDown date={Date.parse('28 Jun 2020 00:00:00 GMT')} />
          </strong>
        </h1>
      </header>
    </div>
  );
}

export default App;
