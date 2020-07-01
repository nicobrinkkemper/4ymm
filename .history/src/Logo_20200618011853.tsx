import React from 'react'
import logoWithCcard from './logo_with_card.svg';
import logoWithCcardFallback from './logo_with_card.png';

const logos = {
    "logo_with_card": (<picture>
        <source srcSet={logoWithCcard} type="image/svg+xml" />
        <img src={logoWithCcardFallback} className="App-logo" alt="logo" />
    </picture>)
}

export default function Logo(){
    return (
        <picture>
            <source srcSet={logo} type="image/svg+xml" />
            <img src={logoFallback} className="App-logo" alt="logo" />
          </picture>
    )
}