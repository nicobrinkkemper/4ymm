import React, { PropsWithChildren } from 'react'
import { create } from 'domain'

export type CardProps = PropsWithChildren<{
    illustration: keyof typeof illustrations
}>

const illustrations = {
    "mario_cake": require("./illustration_mario_cake_yellow.svg")
}

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