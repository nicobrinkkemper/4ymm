import React, {PropsWithChildren} from 'react'

export type CardProps = PropsWithChildren<{
    primary:boolean
    icon:string
}>

export default function Card({children}:CardProps){
    return (
        <div>
            {children}
        </div>
    )
}