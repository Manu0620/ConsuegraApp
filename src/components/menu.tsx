"use client";

import { Logo } from '@/components/logorm'
import { SearchInput } from '../components/search-input';
import { MenuItem } from '@/components/menu-item';
import { useState } from 'react';
import { MenuItems } from '@/components/constants/menu-items';
import { IoMdCart } from "react-icons/io";

export const Menu = () => {

    const showProducts = () => {
        const pdfUrl = '/documents/catalogo-productos-consuegra.pdf'; 
        window.open(pdfUrl, '_blank'); 
    }

    return(
        <nav className="flex z-50 w-full flex-col font-medium fixed">
            <div className='nav-header px-10 relative z-50 flex flex-row w-full bg-white h-28 border border-transparent rounded-bl-[60px] rounded-br-[30px] overflow-hidden lg:px-10 md:px-10 sm:px-5 mobile:px-3 mobilesm:px-0 mobile:pr-5 mobilesm:pr-5 '>
                <Logo />
                {/* <SearchInput /> */}
                <button onClick={showProducts} className="text-red-700 h-14 self-center bg-transparent border-2 border-red-700 hover:bg-red-700 hover:text-white hover:scale-105 transition ease-in-out duration-200 focus:outline-none font-medium rounded-[15px] text-sm px-4 py-2 outline-none lg:text-sm md:text-sm sm:text-[12px] mobile:text-[12px] mobilesm:text-[10px]">Catálogo de productos</button>
                <span className='cart self-center pl-4 text-red-700 hover:scale-110 transition ease-in-out duration-200 '><IoMdCart size={36}/></span>
            </div>
            <div className='nav-bar mt-[-60px] relative z-40 flex flex-row w-full h-36 justify-center items-center bg-red-700 border-2 border-white overflow-hidden'>
                <ul className='pt-14 flex flex-row text-white text-pretty font-medium lg:text-[16px] md:text-md sm:text-sm mobile:text-sm mobilesm:text-[12px]'>
                    {
                        MenuItems.map((item, index) => (
                            <MenuItem key={index} icon={item.icon} name={item.name} hasIcon={item.hasIcon} url={item.url} blank={item.blank}/>
                        ))
                    }
                </ul>
            </div>
            <div className='none bg-white/75'>

            </div>
        </nav>
    );
}
