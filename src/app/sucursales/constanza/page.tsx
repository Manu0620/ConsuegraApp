import Image from "next/image";
import {Menu} from "@/components/menu";
import React from "react";
import { Footer } from '@/components/footer';
import Link from "next/link";

export default function ElectroPlConstanza() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      <Menu />
      <section className="hero-constanza bg-cover bg-top bg-[url('/constanza-hero.png')] mt-36 relative z-30 flex flex-row w-full h-[50vh] items-center bg-blue-950 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
      
      </section>

      <section className="mt-[-60px] relative z-20 flex flex-col w-full min-h-[60vh] items-center bg-gray-100 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
      <div className="mt-28 mb-10 flex flex-row w-3/4 bg-white shadow-xl border border-transparent rounded-[25px] text-pretty">
            <div className="flex flex-col relative basis-1/2 p-10 justify-center items-center">
              <h1 className="text-3xl text-red-700 font-bold m-3">Contacto</h1>
              <div className="flex flex-row m-3 w-full">
                  <div className="flex flex-col basis-1/3 justify-center items-center mx-4 text-center">
                    <span className="p-5 mb-3 text-red-700 bg-red-100 shadow-lg rounded-full">
                      <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                      </svg>
                    </span>
                    <h1 className="font-normal text-red-700">Telefono</h1>
                    <h1 className="font-bold text-md text-red-700">(809) 337-2526</h1>
                  </div>
                  <div className="flex flex-col basis-1/3 justify-center items-center mx-4 text-center">
                    <span className="p-5 mb-3 text-red-700 bg-red-100 shadow-lg rounded-full">
                      <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <h1 className="font-normal text-red-700">Ubicación</h1>
                    <h1 className="font-bold text-sm text-red-700">C. Jaime Dilone,<br /> Ortega</h1>
                  </div>
                  <div className="flex flex-col basis-1/3 justify-center items-center mx-4 text-center">
                    <span className="p-5 mb-3 text-red-700 bg-red-100 shadow-lg rounded-full">
                      <svg className="w-6 h-6 text-red-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                        <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                      </svg>
                    </span>
                    <h1 className="font-normal text-red-700">Correo Electrónico</h1>
                    <h1 className="font-bold text-sm text-red-700">adm@rmconsuegra.com</h1>
                  </div>
              </div>

              <div className="social-media flex flex-row absolute bottom-5 inset-x-0 basis-1/2 mt-2 justify-center items-center text-white text-lg font-medium"> 
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
            </div>
            <div className="flex basis-1/2 justify-end items-center">
              <img className="shadow-lg object-cover border-l-2  border-red-700 rounded-[25px]" src={'/sucursales/fachadas/rm-fachada.jpg'} alt="..." />
            </div>
        </div>

        <h1 className="text-3xl text-red-700 font-bold my-5 text-pretty">Ubicación.</h1>
        <iframe className="w-full border border-transparent rounded-bl-[60px] rounded-br-[30px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4913141844313!2d-70.74682182401568!3d18.909635057172725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb015b3a3147f75%3A0x98cf92d82331544f!2sElectro%20Plomer%C3%ADa%20Constanza!5e0!3m2!1ses!2sdo!4v1723669091016!5m2!1ses!2sdo" width="800" height="600"   loading="eager"></iframe>
      </section>
      <Footer />
    </main>
  );
}
