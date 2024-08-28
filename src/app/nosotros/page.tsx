
import Image from "next/image";
import {Menu} from "@/components/menu";
import React from "react";
import { Footer } from '@/components/footer';
import { Principles } from "@/components/principle";

export default function Nosotros() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      <Menu />
      <section className="hero-nosotros mt-36 relative shadow-md z-30 flex flex-row items-center w-full min-h-fit bg-white overflow-hidden border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <img src={'/sobre-nosotros.png'} alt="..." className="mt-10 object-cover" />
        <h1 className="absolute left-1/4 text-5xl flex flex-col text-white font-bold my-5 text-pretty leading-none mobilesm:text-[16px] mobile:text-lg sm:text-xl md:text-2xl lg:text-5xl"><span className="font-thin text-2xl leading-none mobilesm:text-[8px] mobile:text-[12px] sm:text-sm md:text-xl lg:text-2xl">Sobre</span>NOSOTROS.</h1>
      </section>
      <section className="mt-[-60px] relative shadow-md z-20 flex flex-col w-full min-h-[60vh] items-center bg-gray-100 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <h1 className="pt-16 text-3xl text-blue-900 font-bold m-10 text-pretty text-center mobilesm:text-xl mobile:text-xl md:text-2xl lg:text-3xl">Aqui vas a conocernos <span className="text-red-800">mas</span>.</h1>
        <div className="bg-white flex flex-row flex-wrap-reverse mb-20 p-5 w-8/12 min-h-[30vh] rounded-[45px] shadow-xl overflow-hidden lg:w-8/12 lg:mr-0 lg:flex-row md:w-9/12 md:mr-0 md:flex-col-reverse sm:w-9/12 sm:mr-0 sm:flex-col-reverse mobile:w-9/12 mobile:mr-0 mobile:flex-col-reverse mobilesm:w-10/12 mobilesm:mr-0 mobilesm:flex-col-reverse">
            <div className="flex flex-col basis-7/12 p-10 justify-center items-center text-pretty text-center text-red-700 lg:p-10 md:pt-5 sm:pt-5 mobile:pt-5 mobilesm:pt-5 lg:pt-10 md:p-0 sm:p-0 mobile:p-0 mobilesm:p-0">
                <h1 className="text-2xl mb-3 font-bold mobilesm:text-md">Historia</h1>
                <p className="text-start text-gray-700 pt-2 pl-3 font-normal lg:text-md md:text-md sm:text-[14px] mobile:text-[12px] mobilesm:text-[12px]">
                    En el año 2006, siendo el Sr. Ramón Consuegra un vendedor el cual decide dejar la empresa para la cual laboraba, para emprender una visión de ser independiente, comienza a trazar su propio camino 
                    como vendedor independiente y tras el éxito del mismo, este decide constituir su propia empresa la cual llamó “RM Consuegra, S.R.L.”
                    <br /> <br />
                    En el año 2007, el Sr. Ramón Consuegra se motiva y toma la importante decisión de alquilar un local en el municipio La Ortega Moca para emprender su negocio. 
                    Por consiguiente, este decide inaugurar la apertura de su negocio, el cual abrió sus puertas e inició sus labores con un personal de tan solo 5 empleados.
                    <br /><br />
                    Desde muy joven soñaba con ser empresario, poseía unas ganas inmensas de emprender, acompañadas de un sin número de ideas de negocio las cuales estaban relacionadas en el área eléctrica. 
                    La noción de obtener su propio negocio surge en un momento dado mientras hablaba con su esposa, a la cual le comentó la idea de que este deseaba formar una empresa para vender materiales eléctricos.
                    <br /> <br />
                    El apoyo sobre esta propuesta fue recibido de parte de su esposa y la misma procura ayudarle a luchar por su sueño. Luego con el pasar del tiempo fueron adquiriendo más experiencia de negocio y su empresa fue progresando constantemente.
                    <br /> <br />
                    Hoy en día la empresa “RM Consuegra, S.R.L.” cuenta con un personal mayor de 300 empleados y con cinco tiendas de ventas al detalle en la región Norte, las cuales, con la calidad de sus productos y un servicio especializado, los clientes la caracterizan como su principal suplidor eléctrico.
                </p>
            </div>
            <div className="flex flex-col  basis-5/12 justify-center items-center">
                <img className="border border-red-700 object-cover shadow-lg rounded-[35px] w-fit" src={'/nosotros/Ramon-Consuegra.jpg'} alt="..."/>
                <h1 className="text-xl text-red-700 font-semibold my-2 text-pretty text-center mobilesm:text-sm mobile:text-sm md:text-lg lg:text-xl">Sr. Ramón María Consuegra Lebrón</h1>
            </div>
        </div> 
      </section>

      <section className="mt-[-60px] py-16 relative shadow-md z-10 flex flex-col w-full min-h-[60vh] items-center bg-white border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <h1 className="text-3xl text-blue-900 font-bold m-10 text-pretty text-center mobilesm:text-xl mobile:text-xl md:text-2xl lg:text-3xl">Nuestros <span className="text-red-800">principios</span>.</h1>
        <Principles />
      </section>
      <Footer />
    </main>
  );
}