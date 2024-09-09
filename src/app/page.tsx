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
    <main className="flex min-h-screen flex-col items-center p-0 m-0">
      <Menu />
      <section className="swiper-container mt-36 relative z-30 flex flex-row w-full items-center shadow-md bg-white border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
          <SwiperHome />
      </section>

      <section className="mt-[-60px] pb-10 relative z-20 flex flex-col w-full min-h-[70vh] shadow-md items-center justify-start bg-gray-100 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <h1 className="pt-20 text-3xl text-blue-900 font-semibold m-10 text-pretty text-center mobilesm:text-xl mobile:text-xl md:text-2xl lg:text-3xl">Nuestro compromiso es <span className="text-red-800">contigo</span>.</h1>
        {
          HomeInfo.map((info, index) => (
            <InfoCard key={index} image={info.image} title={info.title} body={info.body} isReverse={info.isReverse} />
          ))
        }
      </section>

      <section className="mt-[-60px] relative z-10 flex flex-col w-full min-h-[70vh] shadow-md items-center justify-center bg-red-100 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <h1 className="pt-20 text-3xl text-red-800 font-semibold m-10 text-pretty text-center mobilesm:text-xl mobile:text-xl md:text-2xl lg:text-3xl">Tenemos gran variedad de productos <span className="text-blue-900">para ti</span>.</h1>
        <Category />
      </section>

      <section className="mt-[-60px] relative z-0 flex flex-col w-full min-h-[60vh] shadow-md items-center bg-blue-100 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <h1 className="pt-20 text-3xl text-blue-900 font-bold mt-10 text-pretty mobilesm:text-xl mobile:text-xl md:text-2xl lg:text-3xl">Productos destacados.</h1>
        <div className="product-carousel flex flex-row flex-wrap mx-50 my-10 w-3/4 justify-center items-center">
          {productos.map((producto, index) => (
              <div key={index} className="card mx-10 my-3 flex flex-col basis-2/12 w-full h-full items-center justify-center text-pretty">
                <Image 
                  className="border border-transparent rounded-full shadow-md max-h-[200px] max-w-[200px] object-contain bg-white"
                  key={producto.id} 
                  src={producto.portrait} 
                  alt='...' 
                  width={200} 
                  height={200} 
                  priority/>

                {/* <p className="mx-5 mt-2 text-[12px] text-gray-500 self-start"># {producto.id}</p> */}
                <h1 className="mt-5 text-md text-blue-900 font-medium self-center">{producto.name}</h1>
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
