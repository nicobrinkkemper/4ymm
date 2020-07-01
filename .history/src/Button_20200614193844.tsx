import React, {PropsWithChildren} from 'react'

export type ButtonProps = PropsWithChildren<{
    primary:boolean
    icon:string
}>

export default function Button({children,primary}:ButtonProps){
    const classList = ['Button']
    if(primary) classList.push('primary')
    return (
        <button className={classList.join(' ')}>
            {children}
        </button>
    )
}