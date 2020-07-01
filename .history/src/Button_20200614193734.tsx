import React, {PropsWithChildren} from 'react'

export type ButtonProps = PropsWithChildren<{
    primary:boolean
    icon:string
}>

export default function Button({children,primary}:ButtonProps){
    const classList = ['button',]
    return (
        <button className="Button">
            {children}
        </button>
    )
}