
import React from 'react';
import CountDown, { CountdownRenderProps } from 'react-countdown';
import './About.css';
import { useLocation } from 'react-router-dom';

function About() {
    const location = useLocation()
    console.log(location)
    return (
        <div className="About">
            About modal
        </div>
    );
}

export default About;
