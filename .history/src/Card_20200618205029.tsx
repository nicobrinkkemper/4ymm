import React, { PropsWithChildren } from 'react'
import marioCake from './illustration_mario_cake_yellow.svg'
import marioCakeFallback from './illustration_mario_cake_yellow.png'
import { Link, LinkProps } from 'react-router-dom'

const illustrations = {
    "mario_cake": (<picture className="Illustration-picture">
        <source srcSet={marioCake} type="image/svg+xml" />
        <img src={marioCakeFallback} className="Illustration-img" alt="logo" />
    </picture>)
}

type allowedIllustration = keyof typeof illustrations
export type CardProps = PropsWithChildren<{
    illustration?: allowedIllustration,
    disabled?: boolean
    to?: LinkProps<any>['to']
}>

const createIllustration = (illustration: allowedIllustration) => {
    return () => (<span className={["Illustration", illustration].join(' ')}>
        {illustrations[illustration]}
    </span>)
}


function hasIllustration(key?:allowedIllustration): key is allowedIllustration{
    return Boolean(typeof key === 'string' && typeof illustrations[key] === 'object') 
}

const WrapLink = ({children,to}:CardProps)=>{
    if(typeof to === 'undefined' ) return <>children</>
    else return <Link to={to}>{children}</Link>
}

export default function Card({ children, illustration, disabled = false, to }: CardProps) {
    const classList = ['Card', illustration]
    if (hasIllustration(illustration)) classList.push('hasIllustration')
    if (disabled) classList.push('disabled')
    const isClickable = typeof to === 'string' 
    
    return (
        <div className={classList.join(' ')}>
            <WrapLink>
                {(hasIllustration(illustration)) ? createIllustration(illustration) : null}
                {children}
            </WrapLink>
        </div>
    )
}