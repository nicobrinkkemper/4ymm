
require('es6-object-assign').polyfill();
import React from 'react';
import CountDown, {CountdownRenderProps} from 'react-countdown';
import logo from './logo2.svg';
import logoFallback from './logo2.png';
import './App.css';
const Completionist = () => <span>4YMM is on!</span>;

const renderer = ({ hours, minutes, seconds, completed }: CountdownRenderProps) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <picture>
          <source srcSet={logo} type="image/svg+xml" />
          <img src={logoFallback} className="App-logo" alt="logo" />
        </picture>
        <h1>
          <strong>
          <CountDown date={Date.parse('28 Jun 2020 16:00:00 GMT')} />
          </strong>
        </h1>
        <p>The event will start on June 28th 2020.</p>
        <p>Stay tuned for more details!</p>
      </header>
    </div>
  );
}

export default App;
