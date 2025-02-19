import { Branchs } from '@/components/constants/branchs';
import { homeSlides } from '@/components/constants/home-slides';
import { BranchInfo } from '@/components/home/branch-info';
import { Swipper } from '@/components/home/swiper_home';

export default function RMConsuegra() {
   const branch = Branchs.find((branch) => branch.phone === '(809) 337-2526');

   return (
      <main className="flex min-h-screen flex-col items-center p-0">
         <section className="swiper-container mt-36 flex flex-row w-full items-center bg-white border-b-2 border-red-800">
            <Swipper slides={homeSlides} />
         </section>

         <BranchInfo branch={branch} />
      </main>
   );
}
