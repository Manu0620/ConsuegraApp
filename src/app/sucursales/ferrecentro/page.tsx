import React from 'react';
import { Swipper } from '@/components/home/swiper_home';
import { BranchInfo } from '@/components/home/branch-info';
import { homeSlides } from '@/components/constants/home-slides';
import { Branchs } from '@/components/constants/branchs';

export default function Ferrecentro() {
   const branch = Branchs.find((branch) => branch.phone === '(809) 612-6464');

   return (
      <main className="flex min-h-screen flex-col items-center p-0">
         <section className="swiper-container mt-36 flex flex-row w-full items-center bg-white border-b-2 border-red-800">
            <Swipper slides={homeSlides} />
         </section>
         <BranchInfo branch={branch} />
      </main>
   );
}
