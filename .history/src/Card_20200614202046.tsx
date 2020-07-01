import React, { PropsWithChildren } from 'react'

export type CardProps = PropsWithChildren<{
    icon: string
}>



export default function Card({ children, icon }: CardProps) {
    const Icon = createIcon(icon)
    return (
        <div className="Card">
            {children}
        </div>
    )
}