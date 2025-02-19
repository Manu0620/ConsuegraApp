'use client';

import { BranchCard } from '@/components/branch-card';
import { ContactForm } from '@/components/form/contact-form';
import Link from 'next/link';
import { FaBookOpen, FaFacebookF, FaInstagram } from 'react-icons/fa';

import { Branchs } from '@/components/constants/branchs';
import Image from 'next/image';

export default function Contacto() {
   return (
      <main className="flex min-h-screen flex-col items-center p-0">
         <section className="hero-nosotros mt-36 relative shadow-md z-30 flex flex-row items-center w-full min-h-fit bg-white overflow-hidden">
            <Image
               src={'/canales-contacto.png'}
               alt="..."
               className="mt-10 object-cover w-full h-full"
               width={0}
               height={0}
               unoptimized
            />
            <h1 className="absolute left-1/4 flex flex-col text-white font-semibold my-5 text-pretty leading-none mobilesm:text-[14px] mobile:text-lg sm:text-xl md:text-2xl lg:text-5xl">
               Canales de contacto
            </h1>
         </section>
         <section className="contacto flex flex-col bg-red-800 relative py-12 px-6 shadow-md w-full min-h-[60vh] items-center">
            <div className="flex flex-row flex-wrap w-full space-y-5 lg:items-start lg:justify-start md:items-start md:justify-center sm:items-start sm:justify-center mobile:items-start mobile:justify-center mobilesm:items-start mobilesm:justify-center ">
               <div className="flex flex-col text-pretty space-y-5 lg:w-1/2 lg:p-16 md:w-full md:px-16 sm:w-full mobile:w-full mobilesm:w-full">
                  <h1 className="flex text-white font-bold text-pretty mobilesm:text-xl mobile:text-xl sm:text-3xl md:text-4xl lg:text-4xl">
                     Contáctenos
                  </h1>
                  <p className="text-white/90 font-light lg:text-[16px] md:text-md sm:text-sm mobile:text-sm mobilesm:text-sm">
                     Si tienes alguna duda, sugerencia o consulta, no dudes en
                     contactarnos. Estamos para ayudarte y brindarte la mejor
                     atención. Puedes comunicarte con nosotros a través de
                     nuestros canales de contacto o visitarnos en cualquiera de
                     nuestras sucursales. ¡Estamos para servirte!
                  </p>

                  <div className="social-media flex flex-row py-2 border-t border-white w-full text-pretty text-white text-lg font-light">
                     <Link
                        href="https://www.instagram.com/rmconsuegrasrl/"
                        className="mx-1 p-4 h-fit flex items-center rounded-full hover:bg-white/25"
                        target="_blank"
                     >
                        <FaInstagram size={22} />
                     </Link>
                     <Link
                        href="https://www.facebook.com/rmconsuegra"
                        className="mx-1 p-4 h-fit flex items-center rounded-full hover:bg-white/25"
                        target="_blank"
                     >
                        <FaFacebookF size={22} />
                     </Link>
                     <Link
                        href="/documents/catalogo-productos-consuegra.pdf"
                        className="mx-1 p-4 h-fit flex items-center rounded-full hover:bg-white/25"
                        target="_blank"
                     >
                        <FaBookOpen size={22} />
                     </Link>
                  </div>
               </div>
               <div className="flex flex-col text-pretty lg:w-1/2 lg:p-16 md:w-full md:px-16 sm:w-full mobile:w-full mobilesm:w-full">
                  <ContactForm />
               </div>
            </div>
         </section>
         <section className="shadow-md flex flex-col w-full min-h-[60vh] py-12 px-6 items-center bg-red-50 space-y-6">
            <h1 className="text-3xl text-red-700 font-bold text-pretty self-center">
               Nuestras sucursales
            </h1>
            <div className="flex flex-row flex-wrap min-h-[30vh] overflow-hidden justify-center items-center lg:w-10/12 lg:flex-row md:w-11/12 md:flex-row sm:w-full sm:flex-col">
               {Branchs.map((branch, index) => (
                  <BranchCard
                     key={index}
                     image={branch.image}
                     name={branch.name}
                     phone={branch.phone}
                     location={branch.location}
                     extensions={branch.extensions}
                     url={branch.url}
                  />
               ))}
            </div>
         </section>
      </main>
   );
}
