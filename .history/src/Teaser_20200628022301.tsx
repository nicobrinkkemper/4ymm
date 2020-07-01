
import React from 'react';
import CountDown, { CountdownRenderProps } from 'react-countdown';
import './Teaser.css';
import YouTube from 'react-youtube';
import { startDate } from 'levelData';
import { Link } from 'react-router-dom';
const trailerYtId = "ypClNLCWpvE"
const Completionist = () => {
    return <span style={{margin:'1rem',color:'#000'}}><Link to='/'>Refresh this page!</Link></span>;
}

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
        <div className="Teaser">
            <div className="youtubeWrapper">
                <YouTube
                    containerClassName="youtubeContainer"
                    videoId={trailerYtId}
                />
            </div>
            <CountDown date={startDate.getTime()} renderer={renderer} daysInHours={true} />
            <div className="copy">
                <p>The event will start on June 28th 2020.</p>
                <p>Stay tuned for more details!</p>
            </div>
        </div>
    );
}

export default Teaser;
