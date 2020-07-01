
import React from 'react';
import CountDown, {CountdownRenderProps} from 'react-countdown';
import logo from './logo2.svg';
import logoFallback from './logo2.png';
import './App.css';
const Completionist = () => <span>4YMM is on!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
  return <>
    <p>
        <strong>{days} days</strong>
    </p>
    <p><strong>{hours} hours</strong></p>
    <p><strong>{minutes} minutes</strong></p>
    <p><strong>{seconds} seconds</strong></p>
  </>;
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
        <CountDown date={Date.parse('28 Jun 2020 16:00:00 GMT')} renderer={renderer} daysInHours={true} />
        <div class="copy">
        <p>The event will start on June 28th 2020.</p>
        <p>Stay tuned for more details!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
