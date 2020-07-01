import React, {PropsWithChildren} from 'react'
import logoWithCard from './logo_with_card.svg';
import logoWithCardFallback from './logo_with_card.png';

const svg = {
    "logo_with_card": (<picture>
        <source srcSet={logoWithCard} type="image/svg+xml" />
        <img src={logoWithCardFallback} className="App-logo" alt="logo" />
    </picture>)
}

export type LogoProps = PropsWithChildren<{
    logo: keyof typeof logos
}>

const createSvg = (icon: keyof typeof logos) => {
    return () => (<span className={["Icon", icon].join(' ')}>
        {icons[icon]}
    </span>)
}


export default function Logo({logo}){
    const Svg = 
    return (
        <picture>
            <source srcSet={logo} type="image/svg+xml" />
            <img src={logoFallback} className="App-logo" alt="logo" />
        </picture>
    )
}