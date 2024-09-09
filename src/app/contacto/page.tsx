"use client";

import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { BranchCard } from "@/components/branch-card";

import { Branchs } from "@/components/constants/branchs";
import { useEffect } from "react";

export default function Contacto() {
    
    return(
        <main className="flex min-h-screen flex-col items-center p-0 bg-red">
            <Menu />
            <section className="hero-nosotros mt-36 relative shadow-md z-30 flex flex-row items-center w-full min-h-fit bg-white overflow-hidden border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
                <img src={'/canales-contacto.png'} alt="..." className="mt-10 object-cover" />
                <h1 className="absolute left-1/4 flex flex-col text-white font-semibold my-5 text-pretty leading-none mobilesm:text-[14px] mobile:text-lg sm:text-xl md:text-2xl lg:text-5xl">Canales de contacto</h1>
            </section>
            <section className="mt-[-60px] pt-16 relative shadow-md z-20 flex flex-col w-full min-h-[60vh] items-center bg-gray-100 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
                <h1 className="text-3xl text-red-700 font-medium my-10 text-pretty self-center">Nuestras sucursales</h1>
                <div className="flex flex-row flex-wrap min-h-[30vh] overflow-hidden justify-center items-center lg:w-10/12 lg:flex-row md:w-11/12 md:flex-row sm:w-full sm:flex-col">
                    {
                        Branchs.map((branch, index) => (
                            <BranchCard key={index} image={branch.image} name={branch.name} phone={branch.phone} location={branch.location} extensions={branch.extensions} url={branch.url} /> 
                        ))
                    }
                </div> 
            </section>
            <section className="empleo mt-[-60px] relative shadow-md z-10 flex flex-col w-full min-h-[60vh] items-center bg-white border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
                <div className="flex flex-row mt-20">
                    <div className="flex flex-col p-10">
                        <h1 className="text-3xl text-red-700 font-medium text-pretty">Se parte del equipo</h1>
                        <p className=""></p>
                    </div>
                    <div className="flex flex-col">
                        <ContactForm />
                    </div>
                </div>
                
            </section>
            <Footer />
        </main>
    );
}

