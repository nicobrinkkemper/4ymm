import React, {PropsWithChildren} from 'react'

export type CardProps = PropsWithChildren<{

}>

export default function Card({children}:CardProps){
    return (
        <div>
            {children}
        </div>
    )
}