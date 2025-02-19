'use client';

import Image from 'next/image';

import { Category } from '@/components/category';
import { homeSlides } from '@/components/constants/home-slides';
import { HomeInfo } from '@/components/constants/info-cards';
import { Swipper } from '@/components/home/swiper_home';
import { InfoCard } from '@/components/info-card';

import { productos } from '@/data/productos';
import { useEffect, useState } from 'react';
import { toast } from '@/components/hooks/use-toast';
import { CheckCircleIcon } from 'lucide-react';
import { MdDangerous } from 'react-icons/md';
import { useParams } from 'next/navigation';

export default function Home() {
   const params = useParams();

   useEffect(() => {
      const status = params.status;
      if (status === 'verified') {
         toast({
            variant: 'success',
            title: 'Usuario verificado con éxito!',
            icon: <CheckCircleIcon className="text-green-800" />,
            description: 'Ya puedes realizar tus cotizaciones y compras.',
         });
      }

      if (status === 'error') {
         toast({
            variant: 'destructive',
            title: 'Error al verificar el usuario!',
            icon: <MdDangerous className="text-red-800" />,
            description: 'El token de verificación es inválido o ha expirado.',
         });
      }
   }, [params]);

   return (
      <main className="flex flex-col min-h-screen items-center p-0 m-0">
         <section className="swiper-container mt-36 flex flex-row w-full items-center bg-white border-b-2 border-red-800">
            <Swipper slides={homeSlides} />
         </section>

         <div className="flex flex-row py-6 px-3 border-b w-full h-32 text-pretty items-center justify-center bg-gray-50">
            {/* Logos de marcas */}
         </div>

         <section className="flex flex-col py-12 px-6 border-b w-full min-h-[70vh] text-pretty shadow-md items-center justify-start bg-white">
            <h1 className="text-red-800 font-bold pb-12 text-center mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-3xl">
               Nuestro compromiso es{' '}
               <span className="text-red-800">contigo</span>
            </h1>
            <div className="flex flex-col lg:w-8/12 md:w-9/12 sm:w-full mobile:w-full mobilesm:w-full">
               {HomeInfo.map((info, index) => (
                  <InfoCard
                     key={index}
                     image={info.image}
                     title={info.title}
                     body={info.body}
                     isReverse={info.isReverse}
                  />
               ))}
            </div>
         </section>

         <section className="flex flex-col py-24 px-6 border-b w-full min-h-[70vh] text-pretty shadow-md items-center justify-center bg-red-50">
            <h1 className="text-red-800 font-bold pb-12 text-center mobilesm:text-2xl mobile:text-2xl md:text-2xl lg:text-3xl">
               Nos especializamos en
            </h1>
            <Category />
         </section>

         <section className="flex flex-col w-full border-b min-h-[60vh] py-24 px-6 text-pretty shadow-md items-center justify-center bg-blue-50">
            <h1 className="text-blue-900 pb-6 font-bold mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-3xl">
               Productos destacados
            </h1>
            <div className="product-carousel flex flex-row flex-wrap w-10/12 justify-center items-center">
               {productos.map((producto, index) => (
                  <div
                     key={index}
                     className="card flex flex-col p-6 basis-1/4 items-center justify-center"
                  >
                     <div className="flex flex-col text-lg contrast-125 min-w-[300px] min-h-[300px] hover:pb-2 hover:scale-105 transition ease-linear duration-200">
                        <Image
                           className="rounded-full drop-shadow-lg object-contain hover:border hover:border-blue-900"
                           key={producto.id}
                           src={producto.portrait}
                           alt="..."
                           width={300}
                           height={300}
                           priority
                        />
                        <h1 className=" p-2 text-blue-900 font-bold self-center">
                           {producto.name}
                        </h1>
                     </div>
                     <p className="text-[14px] w-3/4 text-gray-800 text-center text-ellipsis line-clamp-3">
                        {producto.description}
                     </p>
                  </div>
               ))}
            </div>
         </section>
      </main>
   );
}
