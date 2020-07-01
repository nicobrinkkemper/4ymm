
import React from 'react';
import CountDown, { CountdownRenderProps } from 'react-countdown';
import './About.css';
import { useLocation } from 'react-router-dom';

function About() {
    const location = useLocation()
    if(location.hash !== '#about') return null
    return (
        <div className="About">
            <div>
            About modal
            </div>
        </div>
    );
}

export default About;
