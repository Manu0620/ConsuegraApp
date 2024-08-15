import React from 'react'

interface Props {
    name: string, 
    hasIcon: boolean
}

export const MenuItem = (props: Props) => {
    return(
        <li className='mx-3 hover:text-blue-900 text-pretty'>
            <a className='flex items-center' href="">
                {props.name}
                {props.hasIcon ? (
                    <svg className="w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
                    </svg>
                ) : null}
            </a>
        </li>
    );
}
