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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CountDown date={Date.parse('01 Jan 1970 00:00:00 GMT')} />
        </a>
      </header>
    </div>
  );
}

export default App;
