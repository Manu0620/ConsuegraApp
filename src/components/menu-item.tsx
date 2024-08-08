import React from 'react';

const MenuItem = ({name, icon}) => {
    return(
        <li className='mx-3 hover:text-blue-950'>
            <a className='flex items-center' href="">
                {name}
                {icon}
            </a>
        </li>
    );
}

export default MenuItem;