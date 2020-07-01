import React, { PropsWithChildren } from 'react'

export type CardProps = PropsWithChildren<{
    illustration: string
}>



export default function Card({ children, icon }: CardProps) {
    return (
        <div className="Card">
            {children}
        </div>
    )
}