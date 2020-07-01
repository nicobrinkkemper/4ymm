import React from 'react';
import CountDown from 'react-countdown';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Four years of MarioMaker
        </p>
        <p>
          <strong>
          <CountDown date={Date.parse('28 Jun 2020 00:00:00 GMT')} />
          </strong>
        </p>
      </header>
    </div>
  );
}

export default App;
