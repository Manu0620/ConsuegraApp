
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoIMG from '../../public/Logo.png'

export const Logo = () => {
    return(
        <div className="logo flex flex-row grow p-5 justify-center items-center font-bold">
            <Link href='/' className="flex flex-row">
                <Image src={LogoIMG} alt='...' width={80}/>
                <h1 className="leading-none pb-2 text-lg text-red-600 text-pretty">
                    <span className='pl-3 text-[14px] font-bold'>Grupo</span><br/>
                    <span className='leading-none text-4xl text-blue-800 text-pretty'>Consuegra</span><br/>
                    <span className='leading-none absolute m-1 text-[8px] text-blue-800 text-pretty font-bold'>Importadores mayoristas de materiales electricos</span>
                </h1>
            </Link>
        </div>
    );
}