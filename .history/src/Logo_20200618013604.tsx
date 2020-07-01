import React, {PropsWithChildren} from 'react'
import logoWithCard from './logo_with_card.svg';
import logoWithCardFallback from './logo_with_card.png';

import logoWithoutCard from './logo_without_card.svg';
import logoWithoutCardFallback from './logo_without_card.png';
const svgs = {
    "logo_with_card": (<picture className="Logo-picture">
        <source srcSet={logoWithCard} type="image/svg+xml" />
        <img src={logoWithCardFallback} className="Logo-img" alt="logo" />
    </picture>),
    "logo_without_card": (<picture className="Logo-picture">
        <source srcSet={logoWithoutCard} type="image/svg+xml" />
        <img src={logoWithoutCardFallback} className="Logo-img" alt="logo" />
    </picture>),
}

export type LogoProps = PropsWithChildren<{
    svg?: keyof typeof svgs
}>

const createSvg = (icon: keyof typeof svgs) => {
    return () => (<picture>
        <source srcSet={logoWithCard} type="image/svg+xml" />
        <img src={logoWithCardFallback} className="Logo" alt="logo" />
    </picture>)
}


export default function Logo({svg = "logo_width_card" as keyof typeof svgs}:LogoProps){
    const Svg = createSvg(svg)
    return (
        <div className="Logo">
            <Svg />
        </div>
    )
}