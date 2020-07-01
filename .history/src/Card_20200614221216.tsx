import React, { PropsWithChildren } from 'react'

export type CardProps = PropsWithChildren<{
    illustration: string
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
    return (
        <div className="Card">
            {children}
        </div>
    )
}