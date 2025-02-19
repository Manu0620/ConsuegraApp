import React from 'react';
import { Categories } from '@/data/categories';
import Image from 'next/image';
import { IoIosBuild } from 'react-icons/io';
import { MdElectricalServices } from 'react-icons/md';
import { IoWaterSharp } from 'react-icons/io5';
import { LuConstruction } from 'react-icons/lu';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

export const Category = () => {
   return (
      <div className="grid grid-cols-2 grid-flow-row gap-4 px-6 justify-center items-center text-pretty lg:grid-cols-2 lg:w-3/4 md:grid-cols-1 md:w-8/12 sm:grid-cols-1 sm:w-full mobile:grid-cols-1 mobile:w-full mobilesm:grid-cols-1 mobilesm:w-full">
         {Categories.map((category, index) => (
            <div
               key={index}
               className="flex flex-row relative h-60 bg-white justify-center items-center rounded-3xl overflow-hidden hover:cursor-pointer hover:drop-shadow-lg hover:contrast-125 hover:border hover:border-red-800 ease-linear duration-100"
            >
               <div className="">
                  {category.id == 1 ? (
                     <IoIosBuild className="text-7xl text-red-800" />
                  ) : category.id == 2 ? (
                     <MdElectricalServices className="text-7xl text-red-800" />
                  ) : category.id == 3 ? (
                     <IoWaterSharp className="text-7xl text-red-800" />
                  ) : (
                     <LuConstruction className="text-7xl text-red-800" />
                  )}
               </div>

               <div className="text-start w-1/2 pl-6">
                  <h1 className="text-xl text-red-800 font-semibold">
                     {category.name}
                  </h1>
                  <p className="text-sm text-gray-600 font-light">
                     {category.description}
                  </p>
               </div>

               <Link
                  href="/"
                  className="absolute w-10 opacity-75 bottom-2 right-0 hover:opacity-100"
               >
                  <BsArrowRight className="text-lg text-red-800" />
               </Link>

               <img
                  src="/LogoMono.png"
                  alt=""
                  className="absolute w-10 opacity-75 bottom-2 left-2"
               />
            </div>
         ))}
      </div>
   );
};
