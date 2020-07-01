import React, {PropsWithChildren} from 'react'

export type CardProps = PropsWithChildren<{
    primary:boolean
    icon:string
}>

export default function Card({children,primary,icon}:CardProps){
    return (
        <div className="card">
            {children}
        </div>
    )
}