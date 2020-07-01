import React, {PropsWithChildren} from 'react'

export default function Card({children}:PropsWithChildren<any>){
    return (
        <div>
            {children}
        </div>
    )
}