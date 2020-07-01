import React, {PropsWithChildren} from 'react'

export type CardProps = PropsWithChildren<{
    primary:boolean
    icon:string
}>

export default function Button({children}:PropsWithChildren<any>){
    return (
        <button className="Button">
            {children}
        </button>
    )
}