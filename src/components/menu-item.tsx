import React from 'react'

interface Props {
    name: string, 
    hasIcon: boolean,
    url?: string,
    blank?: boolean
}

export const MenuItem = (props: Props) => {
    return(
        <li className='mx-2 hover:text-gray-200 text-white text-pretty'>
            {
                props.blank
                ? 
                    <a className='flex items-center cursor-pointer' href={props.url} target='_blank'>
                        {props.name}
                        {props.hasIcon ? (
                            <svg className="w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
                            </svg>
                        ) : null}
                    </a>
                :
                    <a className='flex items-center cursor-pointer' href={props.url}>
                        {props.name}
                        {props.hasIcon ? (
                            <svg className="w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
                            </svg>
                        ) : null}
                    </a>

            }
        </li>
    );
}
