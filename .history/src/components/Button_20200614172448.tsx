import React from 'react'
import logo from './logo2.svg';
import logoFallback from './logo2.png';

export default function Logo(){
    return (
        <picture>
            <source srcSet={logo} type="image/svg+xml" />
            <img src={logoFallback} className="App-logo" alt="logo" />
          </picture>
    )
}