
import React from 'react';
import CountDown, { CountdownRenderProps } from 'react-countdown';
import './About.css';
function About() {
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

export default About;
