import React from 'react'

interface Props {
    name: string, 
    hasIcon: boolean,
    url?: string,
    blank?: boolean,
    icon?: string,
}

export const MenuItem = (props: Props) => {
    return(
        <li className='flex mx-3 justify-center items-center hover:text-red-100 text-white text-pretty'>
            {
                props.blank
                ? 
                    <a className='flex items-center cursor-pointer hover:scale-110 transition ease-in-out duration-200' href={props.url} target='_blank'>
                        {props.name}
                        {props.hasIcon ? (
                            <svg className="w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
                            </svg>
                        ) : null}
                    </a>
                :
                    <a className='flex items-center cursor-pointer text-center hover:scale-110 transition ease-in-out duration-200' href={props.url}>
                        {props.icon ? (
                            <img className='flex w-14 mx-1' src={props.icon} alt='...' />
                        ) : props.hasIcon ? (
                            <span>
                                <h1 className='flex text-md'>{props.name}</h1>
                                <svg className="w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
                                </svg>
                            </span>
                        ) : (
                            <h1 className='flex text-md'>{props.name}</h1>
                        )}
                    </a>

            }
        </li>
    );
}
