"use client";

import { Logo } from '@/components/logorm'
import { MenuItem } from '@/components/menu-item';
import { menuItems } from '@/components/constants/menu-items';
import { Button } from "@/components/ui/button"
import { CartSheet } from '@/components/cart/cart-sheet';
import { MenuItems } from './menu-items';

export const Menu = () => {
    const showProducts = () => {
        const pdfUrl = '/documents/catalogo-productos-consuegra.pdf'; 
        window.open(pdfUrl, '_blank'); 
    }

    return(
        <nav className="flex z-50 w-full flex-col font-medium fixed">
            <div className='nav-header px-10 relative z-50 flex flex-row w-full bg-white h-28 rounded-br-3xl rounded-bl-3xl overflow-hidden lg:px-10 md:px-10 sm:px-5 mobile:px-3 mobilesm:px-0 mobile:pr-5 mobilesm:pr-5 '>
                <Logo />
                {/* <SearchInput /> */} 
                <CartSheet />
            </div>
            <div className='nav-bar mt-[-60px] relative z-40 flex flex-row w-full h-36 justify-center items-center bg-red-700 border-b-2 border-white'>
                {/* {<ul className='pt-14 flex flex-row text-white text-pretty font-medium lg:text-[16px] md:text-md sm:text-sm mobile:text-sm mobilesm:text-[12px]'>
                    {
                        menuItems.map((item, index) => (
                            <MenuItem key={index} icon={item.icon} name={item.title} hasIcon={item.hasIcon} url={item.href} blank={item.blank}/>
                        ))
                    }
                </ul>} */}
                <MenuItems />
            </div>
            
        </nav>
    );
}
