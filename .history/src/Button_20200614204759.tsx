import React, {PropsWithChildren} from 'react'

const icons = {
    "arrow-right": (<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 9.375C0 9.78921 0.335787 10.125 0.75 10.125L11.8806 10.125C12.5488 10.125 12.8834 10.9329 12.4109 11.4053L7.93471 15.8815C7.64108 16.1752 7.64192 16.6515 7.93658 16.9441L8.46968 17.4734C8.76287 17.7645 9.2363 17.7637 9.52846 17.4715L17.4697 9.53033C17.7626 9.23744 17.7626 8.76256 17.4697 8.46967L9.53033 0.530329C9.23744 0.237436 8.76256 0.237436 8.46967 0.530331L7.94361 1.05639C7.6509 1.3491 7.65069 1.82361 7.94313 2.11658L12.4137 6.59514C12.8855 7.06781 12.5507 7.875 11.8829 7.875L0.75 7.875C0.335787 7.875 0 8.21079 0 8.625V9.375Z" fill="white" />
    </svg>),
    "folder": (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V8H20V18Z" fill="white"/>
    </svg>
    )
}

const createIcon = (icon:keyof typeof icons) => {
    return ()=>(<span className="icon">
        {icons[icon]}
    </span>)
}

export type ButtonProps = PropsWithChildren<{
    primary:boolean
    icon:keyof typeof icons
}>

export default function Button({children,primary,icon}:ButtonProps){
    const Icon = createIcon(icon)

    const classList = ['Button',icon]
    if(primary) classList.push('primary')
    return (
        <button className={classList.join(' ')}>
            {children}
            <Icon />
        </button>
    )
}