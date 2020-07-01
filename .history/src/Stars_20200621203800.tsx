import React from 'react'

const stars = [
    (<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6064 4.66184L8.29245 4.29474L6.60645 0.375L4.92045 4.30066L0.606445 4.66184L3.88245 7.4625L2.89845 11.625L6.60645 9.41645L10.3144 11.625L9.33644 7.4625L12.6064 4.66184ZM6.60645 8.30921L4.35045 9.65329L4.95045 7.11908L2.95845 5.41382L5.58645 5.18882L6.60645 2.80263L7.63245 5.19474L10.2604 5.41974L8.26845 7.125L8.86845 9.65921L6.60645 8.30921Z" fill="#333333" />
    </svg>
    ),
    (<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6064 4.66184L8.29245 4.29474L6.60645 0.375L4.92045 4.30066L0.606445 4.66184L3.88245 7.4625L2.89845 11.625L6.60645 9.41645L10.3144 11.625L9.33644 7.4625L12.6064 4.66184ZM6.60645 8.30921V2.80263L7.63245 5.19474L10.2604 5.41974L8.26845 7.125L8.86845 9.65921L6.60645 8.30921Z" fill="#333333" />
    </svg>
    ),
    (<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.60645 9.46205L10.3144 11.7L9.33045 7.48205L12.6064 4.64405L8.29245 4.27805L6.60645 0.300049L4.92045 4.27805L0.606445 4.64405L3.88245 7.48205L2.89845 11.7L6.60645 9.46205Z" fill="#333333" />
    </svg>)
]

type StarsProps = {value?:keyof typeof stars}

const Star = (value:keyof typeof stars = 0) => {
    if(value>=2) value = 2
    else if(!value) value = 0
    return stars[value]
}

const Stars = ({value = 0}:StarsProps) => {
    const castValue = Number(value)
    const starsArr = []
    for(let i = 0; i<10; i+=2){
        starsArr.push(Star(Math.max(2,castValue - i))
    }
    return (<>
        {starsArr}
    </>)
}

export default Stars