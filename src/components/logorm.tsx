
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoIMG from '../../public/Logo.png'

export const Logo = () => {
    return(
        <div className="logo flex flex-row grow p-5 justify-start items-center font-bold">
            <Link href='/' className="flex flex-row items-center">
                <img src={'/LogoGrupo.png'} alt="..." className="w-80"/>
            </Link>
        </div>
    );
}