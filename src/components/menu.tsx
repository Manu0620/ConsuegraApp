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

    return(
        <nav className="flex w-full flex-col font-medium">
            <div className='nav-header relative z-50 flex flex-row w-full bg-white h-32 border border-transparent rounded-bl-[60px] rounded-br-[30px] overflow-hidden'>
                <Logo />
                <SearchInput />
                <button type="submit" className="text-white mr-10 h-12 self-center bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none font-medium rounded-[15px] text-sm px-4 py-2">Catalogo de productos</button>
            </div>
            <div className='nav-bar mt-[-60px] relative z-40 flex flex-row w-full h-36 justify-center items-center bg-red-700 border border-transparent rounded-bl-[60px] rounded-br-[30px] overflow-hidden'>
                <ul className='pt-14 flex flex-row text-lg  text-white'>
                    <MenuItem name="Productos" hasIcon={false}/>
                    <MenuItem name="Servicios" hasIcon={true}/>
                    <MenuItem name="Sucursales" hasIcon={true}/>
                    <MenuItem name="Nosotros" hasIcon={true}/>
                    <MenuItem name="Contactanos" hasIcon={false}/>
                </ul>
            </div>
        </nav>
    );
}
