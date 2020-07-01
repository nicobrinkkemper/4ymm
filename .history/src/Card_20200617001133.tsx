import React, { PropsWithChildren } from 'react'
import { create } from 'domain'
import marioCake from './illustration_mario_cake_yellow.svg'
import marioCakeFallback from './illustration_mario_cake_yellow.png'

const illustrations = {
    "mario_cake": (<picture>
        <source srcSet={marioCake} type="image/svg+xml" />
        <img src={marioCakeFallback} className="App-logo" alt="logo" />
    </picture>)
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
    const classList = ['Card', illustration]
    if (!!illustrations[illustration]) classList.push('hasIllustration')
    return (
        <div className={classList.join(' ')}>
            {children}
            <Illustration />
        </div>
    )
}