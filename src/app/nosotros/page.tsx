

import { Menu } from "@/components/menu";
import { Footer } from '@/components/footer';
import { Principles } from "@/components/constants/principles";
import { CardVertical } from "@/components/card-vertical";
import { Principle } from "@/components/nosotros/principle";

export default function Nosotros() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      
      <section className="hero-nosotros mt-36 relative shadow-md z-30 flex flex-row items-center w-full min-h-fit bg-white overflow-hidden"> 
        <img src={'/sobre-nosotros.png'} alt="..." className="mt-10 object-cover" />
        <h1 className="absolute left-1/4 text-5xl flex flex-col text-white font-bold text-pretty leading-none mobilesm:text-[16px] mobile:text-lg sm:text-xl md:text-2xl lg:text-5xl"><span className="font-thin text-2xl leading-none mobilesm:text-[8px] mobile:text-[12px] sm:text-sm md:text-xl lg:text-2xl">Sobre</span>NOSOTROS.</h1>
      </section>

      <section className="shadow-md flex flex-col p-12 w-full min-h-[60vh] items-center bg-gray-100"> 
        <div className="flex flex-row flex-wrap-reverse pb-6 space-y-12 min-h-[30vh] lg:w-10/12 lg:flex-row md:w-10/12 md:flex-col-reverse sm:w-full  sm:flex-col-reverse mobile:w-full mobile:flex-col-reverse mobilesm:w-full mobilesm:flex-col-reverse">
            <div className="flex flex-col basis-7/12 justify-center items-center text-pretty text-center text-red-700 ">
              <h1 
                className=" text-red-800 font-bold pb-6 text-pretty text-center mobilesm:text-xl mobile:text-2xl md:text-3xl lg:text-4xl">
                  Historia
              </h1>
                <p className="text-start text-gray-800 font-normal lg:text-md lg:px-12 md:text-md md:px-0 sm:text-[14px] sm:px-0 mobile:text-[14px] mobile:px-0 mobilesm:text-[14px] mobilesm:px-0">
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
            <div className="flex flex-col basis-5/12 justify-center items-center">
                <img className="border border-red-700 object-cover shadow-lg rounded-3xl w-fit" src={'/nosotros/Ramon-Consuegra.jpg'} alt="..."/>
                <h1 className=" text-red-700 font-semibold mt-2 text-pretty text-center mobilesm:text-sm mobile:text-sm md:text-lg lg:text-xl">Sr. Ramón María Consuegra Lebrón</h1>
                <p className=" text-red-700 font-normal text-pretty text-center mobilesm:text-sm mobile:text-sm md:text-md lg:text-md">Presidente</p>
            </div>
        </div> 
      </section>

      <section className="shadow-md flex flex-col px-6 py-16 w-full min-h-[60vh] items-center bg-white"> 
        <h1 className="text-red-800 font-bold text-pretty text-center mobilesm:text-2xl mobile:text-3xl md:text-3xl lg:text-3xl">Nuestros principios</h1>
        <div className="flex flex-col min-h-52 lg:w-11/12 md:w-full sm:w-full mobile:w-full mobilesm:w-full">
            {
                Principles.map((principle, index) => (
                  // <CardVertical key={index} image={principle.image} titulo={principle.titulo} descripcion={principle.descripcion} />
                  <Principle key={index} title={principle.titulo} description={principle.descripcion} image={principle.image} reverse={principle.reverse}/>
                ))
            }         
        </div>
      </section>
       
    </main>
  );
}