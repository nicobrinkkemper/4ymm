import React, {PropsWithChildren} from 'react'

export default function Card({children}:PropsWithChildren){
    return (
        <div>
            {children}
        </div>
    )
}