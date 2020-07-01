
import React, { PropsWithChildren } from 'react';
import CountDown, { CountdownRenderProps } from 'react-countdown';
import './About.css';
import { useLocation, Link, useHistory } from 'react-router-dom';
import {MDXProvider} from '@mdx-js/react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { importMDX } from 'mdx.macro';
const AboutBody = importMDX.sync('./data/About.mdx')
const CloseSvg = ()=>(
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
    </svg>
)
const AccordionLayout = {
    h2: ({children}:PropsWithChildren<{}>)=>(
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {children}
            </AccordionItemButton>
            </AccordionItemHeading>
        </AccordionItem>
    ),
    p: Text,
  }
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
                        <MDXProvider components={AccordionLayout}>
                            <Accordion>
                                <AboutBody />
                            </Accordion>
                        </MDXProvider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
