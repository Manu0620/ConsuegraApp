"use client";

import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";
import { ApplyForm } from "@/components/form/apply-form";
import Link from "next/link";
import { FaBookOpen, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Empleo() {
    
    return(
        <main className="flex min-h-screen flex-col items-center p-0 bg-red">
            
            <section 
                className="hero-nosotros flex flex-row bg-red-50 mt-48 shadow-md text-center items-center w-full min-h-60 overflow-hidden"> 
                <h1 className="flex flex-col ml-28 text-red-800 font-bold text-pretty leading-none mobilesm:text-2xl mobile:text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Empleate con nosotros</h1>
            </section>
            <section className="empleo flex flex-col bg-white relative p-12 shadow-md w-full min-h-[60vh] items-center"> 
                <div 
                    className="flex flex-row flex-wrap w-full space-y-5 lg:items-start lg:justify-start md:items-start md:justify-center sm:items-start sm:justify-center mobile:items-start mobile:justify-center mobilesm:items-start mobilesm:justify-center ">
                    <div className="flex flex-col text-pretty space-y-5 lg:w-1/2 lg:p-16 md:w-full md:px-32 sm:w-full mobile:w-full mobilesm:w-full">
                        <h1 
                           className="flex text-red-700 font-bold text-pretty mobilesm:text-xl mobile:text-xl sm:text-3xl md:text-4xl lg:text-4xl">
                            Se parte del equipo
                        </h1>
                        <p 
                            className="text-gray-800 font-light lg:text-[16px] md:text-md sm:text-sm mobile:text-sm mobilesm:text-sm"> 
                            Una invitación para formar parte de una organización dinámica y en crecimiento, comprometida con la excelencia, la innovación y el impacto positivo. Al unirte a nuestro equipo, tendrás la oportunidad de contribuir a proyectos significativos, trabajar en un entorno colaborativo y desarrollar tus habilidades profesionales en un ambiente que fomenta el aprendizaje y el crecimiento. Buscamos personas apasionadas, comprometidas y con ganas de hacer la diferencia, tanto en la empresa como en la comunidad.
                        </p>
                        
                        <div className="social-media flex flex-row py-2 border-t border-red-700 w-full text-pretty text-red-700 text-lg font-light"> 
                            <Link href="https://www.instagram.com/rmconsuegrasrl/" className="mx-1 p-3 h-fit flex items-center rounded-full hover:bg-pink-600/25"  target="_blank">
                                <FaInstagram size={22}/>
                            </Link>
                            <Link href="https://www.facebook.com/rmconsuegra" className="mx-1 p-3 h-fit flex items-center rounded-full hover:bg-blue-600/25"  target="_blank">
                                <FaFacebookF size={22}/>
                            </Link>
                            <Link href="/documents/catalogo-productos-consuegra.pdf" className="mx-1 p-3 h-fit flex items-center rounded-full hover:bg-red-700/25"  target="_blank">
                                <FaBookOpen size={22}/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col text-pretty lg:w-1/2 lg:p-16 md:w-full md:px-32 sm:w-full mobile:w-full mobilesm:w-full">
                        <ApplyForm />
                    </div>
                </div>
            </section>
            
        </main>
    );
}

