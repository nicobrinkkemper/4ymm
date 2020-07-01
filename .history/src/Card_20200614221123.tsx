import React, { PropsWithChildren } from 'react'

export type CardProps = PropsWithChildren<{
    illustration: string
}>

const illustrations = {
    "mario_cake": require("illustration_mario_cake_yellow.svg")
}

export default function Card({ children, illustration }: CardProps) {
    return (
        <div className="Card">
            {children}
        </div>
    )
}