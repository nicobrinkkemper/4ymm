
import React, { PropsWithChildren, lazy, Component, Suspense } from 'react';

import './About.css';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { importMDX } from 'mdx.macro';
import { accordionComponents } from 'AccordionLayout';
const CloseSvg = () => (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black" />
    </svg>
)
const AboutContent = importMDX.sync('./data/About.mdx')

function About() {
    const location = useLocation()
    const history = useHistory()
    if (location.hash !== '#about') return null
    return (
        <div className="About-outer">
            <div className="About">
                <div className="About-inner">
                    <div className="About-header">
                        <h1>About 4YMM</h1>
                        <button className="closeBtn" onClick={history.goBack}>
                            <CloseSvg />
                        </button>
                    </div>
                    <div className="About-body">
                        <AccordionLayout>
                            <AboutContent components={accordionComponents} />
                        </AccordionLayout>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
