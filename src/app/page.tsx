import Image from "next/image";
import Menu from "../components/menu";
import React from "react";
import Carousel from '../components/carousel'

const slides = [
    "public/slides/slide1.jpg",
    "public/slides/slide2.jpg",
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      <Menu />
      <section className="mt-[-60px] home-banner-container flex flex-row w-full h-[75vh] items-center bg-blue-950 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        
      </section>
    </main>
  );
}
