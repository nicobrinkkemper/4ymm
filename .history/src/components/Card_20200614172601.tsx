import React, {PropsWithChildren} from 'react'

export default function Card({children}:React.PropsWithChildren){
    return (
        <div>
            {children}
        </div>
    )
}