import React from 'react'

export default function Logo(){
    return (
        <picture>
            <source srcSet={logo} type="image/svg+xml" />
            <img src={logoFallback} className="App-logo" alt="logo" />
          </picture>
    )
}