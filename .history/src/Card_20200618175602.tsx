import React, { PropsWithChildren } from 'react'
import marioCake from './illustration_mario_cake_yellow.svg'
import marioCakeFallback from './illustration_mario_cake_yellow.png'

const illustrations = {
    "mario_cake": (<picture className="Illustration-picture">
        <source srcSet={marioCake} type="image/svg+xml" />
        <img src={marioCakeFallback} className="Illustration-img" alt="logo" />
    </picture>)
}

export type CardProps = PropsWithChildren<{
    illustration?: keyof typeof illustrations
}>

const createIllustration = (illustration: keyof typeof illustrations) => {
    return () => (<span className={["Illustration", illustration].join(' ')}>
        {illustrations[illustration]}
    </span>)
}

type allowedIllustration = keyof typeof illustrations

function hasIllustration(key:undefined|keyof typeof illustrations): key is allowedIllustration{

}

export default function Card({ children, illustration }: CardProps) {
    const classList = ['Card', illustration]
    const hasIllustration = <KEY extends keyof typeof illustrations>(_illustration:KEY):KEY is keyof typeof illustrations=>(_illustration && typeof illustrations[_illustration] === 'object') 
    if (hasIllustration(_illustration)) classList.push('hasIllustration')
    return (
        <div className={classList.join(' ')}>
            {(hasIllustration(_illustration)) ? createIllustration(_illustration) : null}
            {children}
        </div>
    )
}