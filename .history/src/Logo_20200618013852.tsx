import React, { PropsWithChildren } from 'react'
import logoWithCard from './logo_with_card.svg';
import logoWithCardFallback from './logo_with_card.png';

import logoWithoutCard from './logo_without_card.svg';
import logoWithoutCardFallback from './logo_without_card.png';
const svgs = {
    "logo_with_card": (<picture className="Svg-picture">
        <source srcSet={logoWithCard} type="image/svg+xml" />
        <img src={logoWithCardFallback} className="Svg-img" alt="logo" />
    </picture>),
    "logo_without_card": (<picture className="Svg-picture">
        <source srcSet={logoWithoutCard} type="image/svg+xml" />
        <img src={logoWithoutCardFallback} className="Svg-img" alt="logo" />
    </picture>),
}

export type LogoProps = PropsWithChildren<{
    svg?: keyof typeof svgs
}>

const createSvg = (svg: keyof typeof svgs) => {
    return () => (<span className={["Svg", svg].join(' ')}>
        {svgs[svg]}
    </span>)
}


export default function Logo({ svg = "logo_with_card" as keyof typeof svgs }: LogoProps) {
    const Svg = createSvg(svg)
    return (
        <div className="Logo">
            <Svg />
        </div>
    )
}