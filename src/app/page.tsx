"use client"; 

import Image from "next/image";
import React from "react";

import { Category } from "@/components/category";
import { Footer } from '@/components/footer';
import { Menu } from "../components/menu";
import { InfoCard } from "@/components/info-card";
import { HomeInfo } from "@/components/constants/info-cards";
import { SwiperHome } from "@/components/home/swiper_home";

import { productos } from '@/data/productos';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-0 m-0">
      <Menu />
      <section 
          className="swiper-container mt-36 flex flex-row w-full items-center shadow-md bg-white"> 
          <SwiperHome />
      </section>

      <section className="flex flex-col py-12 px-6 w-full min-h-[70vh] text-pretty shadow-md items-center justify-start bg-white"> 
        <h1 
            className="text-red-800 font-bold pb-12 text-center mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-3xl">Nuestro compromiso es <span className="text-red-800">contigo</span></h1>
        <div className="flex flex-col lg:w-8/12 md:w-9/12 sm:w-full mobile:w-full mobilesm:w-full">
          {HomeInfo.map((info, index) => (
              <InfoCard key={index} image={info.image} title={info.title} body={info.body} isReverse={info.isReverse} />
          ))}
        </div>
      </section>

      <section className="flex flex-col py-12 px-6 w-full min-h-[70vh] text-pretty shadow-md items-center justify-center bg-red-700"> 
        <h1 className="text-white font-bold pb-12 text-center mobilesm:text-xl mobile:text-xl md:text-2xl lg:text-3xl">Tenemos gran variedad de productos para ti</h1>
        <Category />
      </section>

      <section className="flex flex-col w-full min-h-[60vh] py-12 px-6 text-pretty shadow-md items-center justify-center bg-blue-50"> 
        <h1 className="text-blue-900 pb-6 font-bold mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-3xl">Productos destacados</h1>
        <div className="product-carousel flex flex-row flex-wrap w-3/4 justify-center items-center">
          {productos.map((producto, index) => (
              <div key={index} className="card px-16 py-6 flex flex-col basis-2/12 w-full h-full items-center justify-center text-pretty">
                <Image 
                  className="border border-transparent rounded-full shadow-md max-h-[200px] max-w-[200px] object-contain bg-white"
                  key={producto.id} 
                  src={producto.portrait} 
                  alt='...' 
                  width={200} 
                  height={200} 
                  priority/>

                {/* <p className="mx-5 mt-2 text-[12px] text-gray-500 self-start"># {producto.id}</p> */}
                <h1 className="mt-5 text-md text-blue-900 font-bold self-center">{producto.name}</h1>
                <p className="text-[12px] text-blue-900 text-center text-ellipsis line-clamp-3">{producto.description}</p>
                {/* <h1 className="mx-5 mt-2 text-xl text-red-700 font-bold self-start">{producto.price}</h1> */}
              </div>
            ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
