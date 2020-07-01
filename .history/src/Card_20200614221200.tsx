import React, { PropsWithChildren } from 'react'

export type CardProps = PropsWithChildren<{
    illustration: string
}>

const illustrations = {
    "mario_cake": require("./illustration_mario_cake_yellow.svg")
}

const createIllustration = (icon: keyof typeof icons) => {
    return () => (<span className={["Icon", icon].join(' ')}>
        {icons[icon]}
    </span>)
}


export default function Card({ children, illustration }: CardProps) {
    return (
        <div className="Card">
            {children}
        </div>
    )
}