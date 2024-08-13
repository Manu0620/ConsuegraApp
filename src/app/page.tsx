import Image from "next/image";
import Menu from "../components/menu";
import React from "react";
import { productos } from '@/data/productos';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      <Menu />
      <section className="slider-container bg-cover bg-[url('/HeroMainImage.png')] mt-[-60px] relative z-30 flex flex-row w-full h-[80vh] items-center bg-blue-950 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        
      </section>
      <section className="mt-[-60px] relative z-20 flex flex-col w-full h-[55vh] items-center bg-blue-100 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <h1 className="pt-14 text-4xl text-red-700 font-bold m-10">Productos sugeridos</h1>
        <div className="product-carousel flex flex-row mx-30 w-full justify-center items-center">
          {productos.map((producto, index) => (
              <div key={index} className="card flex flex-col m-5 w-full h-full items-center justify-start">
                <Image className="border border-transparent rounded-[20px] shadow-md max-h-[200px] object-contain bg-white" key={producto.id} src={producto.portrait} alt='...' width={400} height={200}/>
                <p className="mx-5 mt-2 text-[12px] text-gray-500 self-start text-pretty"># {producto.id}</p>
                <h1 className="mx-5 text-lg text-red-700 font-bold self-start text-pretty">{producto.name}</h1>
                <p className="mx-5 text-[14px] text-blue-900 self-start text-pretty">{producto.description}</p>
                <h1 className="mx-5 mt-2 text-xl text-red-700 font-bold self-start text-pretty">{producto.price}</h1>
              </div>
            ))}
        </div>
      </section>
      <footer className="mt-[-60px] relative flex flex-col w-full h-[45vh] justify-center items-center bg-blue-900 text-white text-pretty">
          <h1 className="text-5xl font-bold">Fin.</h1>
          <div className="social-media flex flex-row absolute inset-x-0 bottom-5 w-full justify-center text-blue-300 text-md font-medium"> 
            <a href="https://www.instagram.com/rmconsuegrasrl/" className="mx-2 flex items-center text-pretty"  target="_blank">
              <svg className="w-6 h-6 text-blue-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
              </svg>
              Instragam
            </a>
            <a href="https://www.facebook.com/rmconsuegra" className="mx-2 flex items-center text-pretty"  target="_blank">
              <svg className="w-6 h-6 text-blue-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
              </svg>
              Facebook
            </a>
            <a href="https://rmconsuegra.com/" className="mx-2 flex items-center text-pretty"  target="_blank">
              <svg className="w-6 h-6 text-blue-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
              </svg>
              Pagina Web
            </a>
          </div>
      </footer>
    </main>
  );
}
