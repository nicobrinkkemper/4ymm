import React, { PropsWithChildren } from 'react'
import { create } from 'domain'
import marioCake from './illustration_mario_cake_yellow.svg'

const illustrations = {
    "mario_cake": <picture>
    <source srcSet={logo} type="image/svg+xml" />
    <img src={logoFallback} className="App-logo" alt="logo" />
  </picture>
}

export type CardProps = PropsWithChildren<{
    illustration: keyof typeof illustrations
}>

const createIllustration = (illustration: keyof typeof illustrations) => {
    return () => (<span className={["Illustration", illustration].join(' ')}>
        {illustrations[illustration]}
    </span>)
}


export default function Card({ children, illustration }: CardProps) {
    const Illustration = createIllustration(illustration)
    return (
        <div className="Card">
            {children}
            <Illustration />
        </div>
    )
}