import Image from "next/image";
import React from "react";
import Link from "next/link";

import { Menu } from "@/components/menu";
import { Footer } from '@/components/footer';
import { Branchs } from "@/components/constants/branchs";
import { MdOutlineLocationCity, MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

export default function RMConsuegra() {
  
  const rm = Branchs.find(branch => branch.name === 'RM Consuegra');
  
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      <Menu />
      <section className="hero-rm bg-cover bg-top bg-[url('/rm-hero.png')] mt-36 flex flex-row w-full h-[60vh] max-h-[65vh] items-center bg-blue-950"> </section>
      
      <section className="flex flex-col bg-white w-full space-y-8 justify-center items-center py-12 px-6">
        <img className="border-b-2 border-red-700 shadow-xl object-cover rounded-3xl " src={'/sucursales/fachadas/rm-fachada.jpg'} alt="..." />
        <h1 className="text-5xl text-red-700 font-bold text-pretty">RM Consuegra</h1>
        <div className="flex flex-col border-t-2 rounded-br-3xl rounded-bl-3xl border-red-700 text-pretty pt-6 space-y-12 bg-red-50 items-center justify-center lg:w-3/4 md:w-10/12 sm:w-full mobile:w-full mobilesm:w-full">
            
            <div className="flex flex-row w-3/4 items-center justify-center">
              <p className="font-normal text-red-700 text-md">
                <b>RM Consuegra</b> es una empresa dedicada a la venta de materiales de construcción y ferretería en general. Contamos con una amplia variedad de productos de la mejor calidad para satisfacer las necesidades de nuestros clientes. Nuestro compromiso es brindar un servicio de excelencia, con atención personalizada y asesoría especializada. Visítanos y descubre todo lo que tenemos para ti. ¡Estamos para servirte!
              </p>
            </div>

            <div className="flex flex-row items-center justify-center min-h-fit lg:scale-100 lg:w-3/4 lg:flex-row md:scale-90 md:w-full md:flex-row sm:scale-90 sm:w-full sm:flex-col mobile:scale-90 mobile:w-full mobile:flex-col mobilesm:scale-90 mobilesm:w-full mobilesm:flex-col">
              <div className="flex flex-col p-4 basis-1/3 justify-center items-center text-center">
                <MdOutlinePhone size={48} className="text-red-700"/>
                <h1 className="font-bold text-xl text-red-700">Telefono</h1>
                {rm && <h1 className="font-medium text-md text-red-700">{rm.phone}</h1>}
              </div>
              <div className="flex flex-col p-4 basis-1/3 justify-center items-center text-center">
                <FaMapLocationDot size={48} className="text-red-700"/>
                <h1 className="font-bold text-xl text-red-700">Ubicación</h1>
                {rm && <h1 className="font-medium text-md text-red-700">{rm.location}</h1>}
              </div>
              <div className="flex flex-col p-4 basis-1/3 justify-center items-center text-center">
                <MdOutlineMail size={48} className="text-red-700"/>
                <h1 className="font-bold text-xl text-red-700">Correo Electronico</h1>
                {rm && <h1 className="font-medium text-md text-red-700">adm@rmconsuegra.com</h1>}
              </div>
            </div>

            <div className="social-media flex flex-row justify-center items-center text-white text-lg font-medium"> 
                <Link href="https://www.instagram.com/rmconsuegrasrl/" className="mx-2 p-3 h-fit flex items-center text-pretty border-2 border-red-700 rounded-full hover:bg-red-700/25"  target="_blank">
                    <svg className="w-6 h-6 text-red-700 dark:text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                    </svg>
                </Link>
                <Link href="https://www.facebook.com/rmconsuegra" className="mx-2 p-3 h-fit flex items-center text-pretty border-2 border-red-700 rounded-full hover:bg-red-700/25"  target="_blank">
                    <svg className="w-6 h-6 text-red-700 dark:text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                    </svg>
                </Link>
                <Link href="/documents/catalogo-productos-consuegra.pdf" className="mx-2 p-3 h-fit flex items-center text-pretty border-2 border-red-700 rounded-full hover:bg-red-700/25"  target="_blank">
                    <svg className="w-6 h-6 text-red-700 dark:text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
                    </svg>
                </Link>
            </div>

            <div className="flex flex-row w-full justify-center items-center text-center border-t border-red-700">
                <p className="font-normal text-red-700 text-sm leading-8">
                  <b>Horario de atención: </b> Lunes a Viernes de 8:00am a 5:00pm
                </p>
            </div>
        </div>
      </section>

      <section className="flex flex-col w-full min-h-[60vh] pt-12 items-center bg-red-50">
        <h1 className="text-4xl text-red-700 font-bold pb-12 text-pretty">Ubicación</h1>
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.665907977616!2d-70.60689184033586!3d19.383613582004067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1d1c3fad50f73%3A0x5130d828e8d13ffc!2sRM%20Consuegra!5e0!3m2!1ses!2sdo!4v1723669805852!5m2!1ses!2sdo" width="800" height="600"   loading="lazy"></iframe>
      </section>
      <Footer />
    </main>
  );
}