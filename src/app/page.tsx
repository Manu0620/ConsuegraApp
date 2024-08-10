import Image from "next/image";
import Menu from "../components/menu";
import React from "react";
import { productos } from '@/data/productos';
import Skeleton from '/public/BannerImage.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      <Menu />
      <section className="mt-[-60px] relative z-30 home-banner-container flex flex-row w-full h-[75vh] items-center bg-blue-950 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 

      </section>
      <section className="mt-[-60px] relative z-20 flex flex-col w-full h-[55vh] items-center bg-rose-50 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <h1 className="pt-14 text-4xl text-red-700 font-bold m-10">Productos destacados</h1>
        <div className="product-carousel flex flex-row mx-30 w-full justify-center items-center">
          {
            productos.map((producto => (
              <div className="card flex grow flex-col m-5 w-full h-full items-center justify-start">
                <Image className="border border-transparent rounded-[20px] shadow-md" key={producto.id} src={'/BannerImage.png'} alt='...' width={400} height={340}/>
                <h1 className="mx-5 mt-2 text-lg text-red-700 font-bold self-start text-pretty">{producto.name}</h1>
                <p className="mx-5 text-[14px] text-blue-900 self-start text-pretty">{producto.description}</p>
                <h1 className="mx-5 mt-2 text-xl text-red-700 font-bold self-start text-pretty">{producto.price}</h1>
              </div>
            )))
          }
        </div>
      </section>
    </main>
  );
}
