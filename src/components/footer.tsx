import React from 'react';
import Link from 'next/link';
import { Branchs } from './constants/branchs';


export const Footer = () => {
    return(
        <footer className="mt-[-60px] flex flex-row flex-wrap pt-16 w-full min-h-[55vh] justify-center items-center bg-red-800 text-white text-pretty">
            <div className='flex flex-row flex-wrap w-full justify-center items-center lg:basis-4/6 lg:pl-10 lg:flex-row md:basis-5/6 md:flex-col sm:basis-full sm:flex-col mobile:basis-full mobile:flex-col mobilesm:basis-full mobilesm:flex-col '>
                <div className="flex flex-col basis-3/12 justify-center items-center lg:m-0 md:m-10 sm:m-10 mobile:m-10 mobilesm:m-10">
                    <img src="/LogoGrupo-removebg-preview.png" alt="..." className='lg:w-full '/>
                </div>
                <div className="flex flex-col basis-3/12 text-pretty items-center justify-center lg:mb-0 md:mb-10 sm:mb-10 mobile:mb-10 mobilesm:mb-10"> 
                    <h1 className='text-white font-semibold text-lg mb-3'>Podria interesarte</h1>
                    <ul className='flex flex-col font-light lg:flex-col md:flex-row sm:flex-row mobile:flex-col mobilesm:flex-col'>
                        <Link className='my-1 mx-3'  href={'/documents/catalogo-productos-consuegra.pdf'}>
                            Catalogo de productos
                        </Link>
                        <Link className='my-1 mx-3'  href={'/nosotros'}>
                            Sobre Nosotros
                        </Link>
                        <Link className='my-1 mx-3'  href={'/contacto'}>
                           Contacto
                        </Link>
                        <Link className='my-1 mx-3'  href={'/contacto'}>
                           Trabaja con nosotros
                        </Link>
                    </ul> 
                </div>
                <div className="flex flex-col basis-1/2 text-pretty text-center items-center"> 
                    <h1 className='text-white font-semibold text-lg mb-5'>Nuestras sucursales</h1>
                    <div className='flex flex-row flex-wrap font-light w-full lg:w-full md:w-full sm:w-3/4 mobile:w-3/4 mobilesm:w-3/4'>
                        {
                            Branchs.map((branch, index) => (
                                <Link key={index} className='flex flex-col basis-1/3 justify-center items-center text-center mb-3 lg:basis-1/3 md:basis-1/3 sm:basis-1/2 mobile:basis-1/2 mobilesm:basis-full' href={branch.url}>
                                    <span className="flex basis-1/2 p-5 mb-3 w-fit text-red-700 bg-white shadow-lg rounded-full">
                                        <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M5.535 7.677c.313-.98.687-2.023.926-2.677H17.46c.253.63.646 1.64.977 2.61.166.487.312.953.416 1.347.11.42.148.675.148.779 0 .18-.032.355-.09.515-.06.161-.144.3-.243.412-.1.111-.21.192-.324.245a.809.809 0 0 1-.686 0 1.004 1.004 0 0 1-.324-.245c-.1-.112-.183-.25-.242-.412a1.473 1.473 0 0 1-.091-.515 1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.401 1.401 0 0 1 13 9.736a1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.4 1.4 0 0 1 9 9.74v-.008a1 1 0 0 0-2 .003v.008a1.504 1.504 0 0 1-.18.712 1.22 1.22 0 0 1-.146.209l-.007.007a1.01 1.01 0 0 1-.325.248.82.82 0 0 1-.316.08.973.973 0 0 1-.563-.256 1.224 1.224 0 0 1-.102-.103A1.518 1.518 0 0 1 5 9.724v-.006a2.543 2.543 0 0 1 .029-.207c.024-.132.06-.296.11-.49.098-.385.237-.85.395-1.344ZM4 12.112a3.521 3.521 0 0 1-1-2.376c0-.349.098-.8.202-1.208.112-.441.264-.95.428-1.46.327-1.024.715-2.104.958-2.767A1.985 1.985 0 0 1 6.456 3h11.01c.803 0 1.539.481 1.844 1.243.258.641.67 1.697 1.019 2.72a22.3 22.3 0 0 1 .457 1.487c.114.433.214.903.214 1.286 0 .412-.072.821-.214 1.207A3.288 3.288 0 0 1 20 12.16V19a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-4H8v4a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-6.888ZM13 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Z" clip-rule="evenodd"/>
                                        </svg>
                                    </span>
                                    <span className='flex flex-col basis-1/2 items-center'>
                                        <h1 className='text-white font-medium text-[14px]'>{branch.name}</h1>
                                        <p className='text-[12px]'>{branch.phone}</p>
                                    </span>
                                </Link>
                            ))
                        }
                    </div> 
                </div>
            </div>
            <div className='flex flex-col relative basis-4/12 p-10 w-full text-pretty items-center mobilesm:basis-full mobile:basis-full sm:basis-full md:basis-8/12 lg:basis-4/12'>
                <h1 className='flex flex-col text-start text-sm font-thin'>Ponte en contacto<span className='font-bold text-2xl'>CON NOSOTROS.</span></h1>
                <form action="" className='flex flex-col m-5 w-full justify-center items-center'> 
                    <div className='flex flex-row w-3/4 justify-center items-center'>
                        <input className="block outline-none m-1 ml-0 p-4 w-1/2 text-sm text-white border-2 border-white rounded-[15px] bg-transparent focus:bg-white/25" placeholder="Nombre... " required />
                        <input type='email' className="block outline-none m-1 mr-0 p-4 w-1/2 text-sm text-white border-2 border-white rounded-[15px] bg-transparent focus:bg-white/25" placeholder="Correo Electronico... " required />
                    </div>  
                    <textarea className="block outline-none m-1 p-4 w-3/4 h-24 text-sm text-white border-2 border-white rounded-[15px] bg-transparent focus:bg-white/25 " placeholder="Su mensaje... "  required />
                    <div className='flex flex-row flex-wrap-reverse w-3/4 justify-center'>
                        <div className="social-media flex flex-row inset-x-0 basis-1/2 mt-2 justify-center items-center text-white text-lg font-medium"> 
                            <Link href="https://www.instagram.com/rmconsuegrasrl/" className="mx-1 p-3 h-fit flex items-center text-pretty border-2 border-white rounded-full hover:bg-white/25"  target="_blank">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                                </svg>
                            </Link>
                            <Link href="https://www.facebook.com/rmconsuegra" className="mx-1 p-3 h-fit flex items-center text-pretty border-2 border-white rounded-full hover:bg-white/25"  target="_blank">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                                </svg>
                            </Link>
                            <Link href="/documents/catalogo-productos-consuegra.pdf" className="mx-1 p-3 h-fit flex items-center text-pretty border-2 border-white rounded-full hover:bg-white/25"  target="_blank">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                        <button className="flex border-2 border-white text-white my-2 basis-1/2 h-14 items-center justify-center hover:bg-white/25 focus:ring-4 focus:outline-none font-medium rounded-[15px] text-md px-4 py-2 outline-none">Enviar</button>
                    </div>
                </form>     
            </div>
            
        </footer>
    );
}