import React, { PropsWithChildren } from 'react'

export type CardProps = PropsWithChildren<{
    illustration: string
}>



export default function Card({ children, illustration }: CardProps) {
    return (
        <div className="Card">
            {children}
        </div>
    )
}