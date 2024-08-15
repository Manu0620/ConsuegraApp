import Image from "next/image";
import {Menu} from "@/components/menu";
import React from "react";
import { Footer } from '@/components/footer';

export default function FerreteriaGuaz() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      <Menu />
      <section className="hero-guazumas bg-cover bg-top bg-[url('/guazumas-hero.png')] mt-[-60px] relative z-30 flex flex-row w-full h-[50vh] items-center bg-blue-950 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
      
      </section>

      <section className="mt-[-60px] relative z-20 flex flex-col w-full h-[60vh] items-center bg-blue-100 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <h1 className="pt-20 text-3xl text-blue-900 font-bold my-5 text-pretty">Ubicacion.</h1>
        <iframe className="w-full border border-transparent rounded-bl-[60px] rounded-br-[30px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.091414995883!2d-70.58121752400841!3d19.365194042828612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1d1712bf70773%3A0x1df930a9cd53b29f!2sFerreter%C3%ADa%20Consuegra%20Las%20Gu%C3%A1zumas!5e0!3m2!1ses!2sdo!4v1723669479737!5m2!1ses!2sdo" width="800" height="600"   loading="eager"></iframe>
      </section>
      <Footer />
    </main>
  );
}
