"use client";

import Image from 'next/image'
import Link from 'next/link';
import { Logo } from '@/components/logorm'
import { SearchInput } from '../components/search-input';
import { MenuItem } from '@/components/menu-item'
import { useState } from 'react'

export const Menu = () => {
    const [mobileDrawerOpen, setMobileDrawer] = useState(false);
    const toggleNavbar = () =>{
        setMobileDrawer(!mobileDrawerOpen);
    };

    const showProducts = () => {
        const pdfUrl = '/documents/catalogo-productos-consuegra.pdf'; 
        window.open(pdfUrl, '_blank'); 
    }

    return(
        <nav className="flex z-50 w-full flex-col font-medium fixed">
            <div className='nav-header px-10 relative z-50 flex flex-row w-full bg-white h-32 border border-transparent rounded-bl-[60px] rounded-br-[30px] overflow-hidden'>
                <Logo />
                {/* <SearchInput /> */}
                <button onClick={showProducts} className="text-white h-14 self-center bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:outline-none font-medium rounded-[15px] text-sm px-4 py-2 outline-none">Catálogo de productos</button>
            </div>
            <div className='nav-bar mt-[-60px] relative z-40 flex flex-row w-full h-36 justify-center items-center bg-red-700 border-2 border-white rounded-bl-[60px] rounded-br-[30px] overflow-hidden'>
                <ul className='pt-14 flex flex-row text-lg text-white lg:text-lg sm:text-sm mobile:text-[12px]'>
                    <MenuItem name="Productos" hasIcon={false} url='/documents/catalogo-productos-consuegra.pdf'/>
                    <MenuItem name="Sucursales" hasIcon={true}/>
                    <MenuItem name="Nosotros" hasIcon={true}/>
                    <MenuItem name="Contactanos" hasIcon={false}/>
                </ul>
            </div>
        </nav>
    );
}
