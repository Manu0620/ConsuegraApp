'use client';

import Image from 'next/image';

import { Category } from '@/components/category';
import { homeSlides } from '@/components/constants/home-slides';
import { HomeInfo } from '@/components/constants/info-cards';
import { Swipper } from '@/components/home/swiper_home';
import { InfoCard } from '@/components/info-card';

import { productos } from '@/data/productos';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-0 m-0">
      <section className="swiper-container mt-36 flex flex-row w-full items-center bg-white border-b-2 border-red-800">
        <Swipper slides={homeSlides} />
      </section>

      <section className="flex flex-col py-12 px-6 w-full min-h-[70vh] text-pretty shadow-md items-center justify-start bg-white">
        <h1 className="text-red-800 font-bold pb-12 text-center mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-3xl">
          Nuestro compromiso es <span className="text-red-800">contigo</span>
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

      <section className="flex flex-col py-12 px-6 w-full min-h-[70vh] text-pretty shadow-md items-center justify-center bg-red-700">
        <h1 className="text-white font-bold pb-12 text-center mobilesm:text-xl mobile:text-xl md:text-2xl lg:text-3xl">
          Tenemos gran variedad de productos para ti
        </h1>
        <Category />
      </section>

      <section className="flex flex-col w-full min-h-[60vh] py-12 px-6 text-pretty shadow-md items-center justify-center bg-blue-50">
        <h1 className="text-blue-900 pb-6 font-bold mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-3xl">
          Productos destacados
        </h1>
        <div className="product-carousel flex flex-row flex-wrap w-10/12 justify-center items-center">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="card flex flex-col p-6 basis-1/4 items-center justify-center"
            >
              <div className="flex flex-col grayscale text-lg contrast-125 hover:grayscale-0 hover:scale-105 transition ease-in-out duration-200">
                <Image
                  className="contrast-125 rounded-3xl drop-shadow-lg max-h-[300px] max-w-[300px] object-contain"
                  key={producto.id}
                  src={producto.portrait}
                  alt="..."
                  width={250}
                  height={250}
                  priority
                />
                <h1 className=" p-2 text-blue-900 font-bold self-center">
                  {producto.name}
                </h1>
              </div>
              <p className="text-[12px] w-3/4 text-blue-900 text-center text-ellipsis line-clamp-3">
                {producto.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
