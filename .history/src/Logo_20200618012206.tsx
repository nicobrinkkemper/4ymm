import React, {PropsWithChildren} from 'react'
import logoWithCard from './logo_with_card.svg';
import logoWithCardFallback from './logo_with_card.png';

const svgs = {
    "logo_with_card": (<picture>
        <source srcSet={logoWithCard} type="image/svg+xml" />
        <img src={logoWithCardFallback} className="App-logo" alt="logo" />
    </picture>)
}

export type LogoProps = PropsWithChildren<{
    svg: keyof typeof svgs
}>

const createSvg = (icon: keyof typeof svgs) => {
    return () => (<span className={["Icon", icon].join(' ')}>
        {svgs[icon]}
    </span>)
}


export default function Logo({svg}:LogoProps){
    const Svg = createSvg(svg)
    return (
        <picture>
            <source srcSet={logo} type="image/svg+xml" />
            <img src={logoFallback} className="App-logo" alt="logo" />
        </picture>
    )
}