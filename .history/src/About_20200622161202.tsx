
import React from 'react';
import CountDown, { CountdownRenderProps } from 'react-countdown';
import './About.css';
import { useLocation, Link, useHistory } from 'react-router-dom';

const CloseSvg = ()=>(
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
    </svg>
)

function About() {
    const location = useLocation()
    const history = useHistory()
    if(location.hash !== '#about') return null
    return (
        <div className="About-outer">
            <div className="About">
                <div className="About-inner">
                    <div className="About-header">
                        <h1>About 4YMM</h1>
                        <button className="closeBtn" onClick={history.goBack}>
                            <CloseSvg/>
                        </button>
                    </div>
                    <div className="About-body">
                        <h2>What is 4YMM?</h2>
                        <p>4YMM is the fourth annual celebration of Mario Maker, a community project coordinated by Kiavik. Considered by many the definitive recurring Mario Maker collaboration, it has always featured contributions from some of the most celebrated makers from the Mario Maker community, as well as lesser known hot shots who qualified through an audition process. What’s new this year is obviously that we have all the tools of Super Mario Maker 2 at our disposal.</p>

                        <h2>Who is 4YMM?</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
