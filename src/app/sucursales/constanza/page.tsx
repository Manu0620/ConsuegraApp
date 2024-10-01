import Image from "next/image";
import {Menu} from "@/components/menu";
import React from "react";
import { Footer } from '@/components/footer';
import Link from "next/link";
import { Swipper } from "@/components/home/swiper_home";
import { BranchInfo } from "@/components/home/branch-info";
import { homeSlides } from "@/components/constants/home-slides";
import { Branchs } from "@/components/constants/branchs";

export default function ElectroPlConstanza() {
  const branch = Branchs.find((branch) => branch.phone === "(809) 539-2121");

  return (
    <main className="flex min-h-screen flex-col items-center p-0">
      <section className="swiper-container mt-36 flex flex-row w-full items-center bg-white border-b-2 border-red-800">
        <Swipper slides={homeSlides} />
      </section>
      
      <BranchInfo branch={branch} />
    </main>
  );
}
