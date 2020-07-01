
import React from 'react';
import CountDown, { CountdownRenderProps } from 'react-countdown';
import './Teaser.css';
import YouTube from 'react-youtube';
const trailerYtId = "ypClNLCWpvE"
const Completionist = () => <span>4YMM is on!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <>
      <p className="countdown">
        <strong>{days}{'\u00A0'}days{'\u00A0'}</strong>
        <strong>{hours}{'\u00A0'}hours{'\u00A0'}</strong>
        <strong>{minutes}{'\u00A0'}minutes{'\u00A0'}</strong>
        <strong>{seconds}{'\u00A0'}seconds{'\u00A0'}</strong></p>
    </>;
  }
};

function Teaser() {
  return (
    

        <article className="App-body">
          <div className="youtubeWrapper">
            <YouTube
              containerClassName="youtubeContainer"
              videoId={trailerYtId}
            />
          </div>
          <CountDown date={Date.parse('28 Jun 2020 16:00:00 GMT')} renderer={renderer} daysInHours={true} />
          <div className="copy">
            <p>The event will start on June 28th 2020.</p>
            <p>Stay tuned for more details!</p>
          </div>
        </article>
  );
}

export default App;
