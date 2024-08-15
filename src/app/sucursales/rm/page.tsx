import Image from "next/image";
import {Menu} from "@/components/menu";
import React from "react";
import { Footer } from '@/components/footer';

export default function RMConsuegra() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      <Menu />
      <section className="hero-rm bg-cover bg-top bg-[url('/rm-hero.png')] mt-36 relative z-30 flex flex-row w-full h-[50vh] items-center bg-blue-950 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 

      </section>
      <section className="mt-[-60px] relative z-20 flex flex-col w-full min-h-[60vh] items-center bg-blue-100 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        
        <div className="mt-28 flex flex-row w-full min-h-96">
            <div className="basis-1/2">

            </div>
            <div className="flex basis-1/2 justify-center items-center">
              <Image className="border-b-2 border-r-2 border-red-700 rounded-xl shadow-lg min-w-fit m-30 object-contain overflow-hidden" src={'/rm-fachada.jpg'} alt="..." width={500} height={500} />
            </div>
        </div>

        <h1 className="text-3xl text-blue-900 font-bold my-5 text-pretty">Ubicacion.</h1>
        <iframe className="w-full border border-transparent rounded-bl-[60px] rounded-br-[30px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.665907977616!2d-70.60689184033586!3d19.383613582004067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1d1c3fad50f73%3A0x5130d828e8d13ffc!2sRM%20Consuegra!5e0!3m2!1ses!2sdo!4v1723669805852!5m2!1ses!2sdo" width="800" height="600"   loading="lazy"></iframe>
      </section>
      <Footer />
    </main>
  );
}