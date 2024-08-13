"use client";

import Image from 'next/image'
import SearchInput from './search-input'
import { Logo } from '@/components/logorm'
import { MenuItem } from '@/components/menu-item'
import { useState } from 'react'

export default function Menu() {
    const [mobileDrawerOpen, setMobileDrawer] = useState(false);
    const toggleNavbar = () =>{
        setMobileDrawer(!mobileDrawerOpen);
    };

    return(
        <nav className="flex w-full flex-col font-medium">
            <div className='nav-header relative z-50 flex flex-row w-full bg-white h-32 border border-transparent rounded-bl-[60px] rounded-br-[30px] overflow-hidden'>
                <Logo />
                <SearchInput />
            </div>
            <div className='nav-bar mt-[-60px] relative z-40 flex flex-row w-full h-36 justify-center items-center bg-red-700 border border-transparent rounded-bl-[60px] rounded-br-[30px] overflow-hidden'>
                <ul className='pt-14 flex flex-row text-lg  text-white'>
                    <MenuItem name="Productos" hasIcon={true}/>
                    <MenuItem name="Servicios" hasIcon={true}/>
                    <MenuItem name="Sucursales" hasIcon={true}/>
                    <MenuItem name="Nosotros" hasIcon={true}/>
                    <MenuItem name="Contactanos" hasIcon={false}/>
                </ul>
            </div>
        </nav>
    );
}
