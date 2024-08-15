import Image from "next/image";

import { Category } from "@/components/category";
import { Footer } from '@/components/footer';
import { productos } from '@/data/productos';
import { Menu } from "../components/menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      <Menu />
      <section className="slider-container bg-cover bg-[url('/HeroMainImage.png')] mt-[-60px] relative z-30 flex flex-row w-full h-[80vh] items-center bg-blue-950 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 

      </section>

      <section className="mt-[-60px] relative z-20 flex flex-col w-full min-h-[70vh] items-center justify-start bg-white border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <h1 className="pt-20 text-3xl text-blue-900 font-bold m-10 text-pretty">Tenemos gran variedad de productos para ti.</h1>
        <Category />
      </section>

      <section className="mt-[-60px] relative z-10 flex flex-col w-full min-h-[60vh] items-center bg-blue-100 border border-transparent rounded-bl-[60px] rounded-br-[30px]"> 
        <h1 className="pt-20 text-3xl text-blue-900 font-bold mt-10 text-pretty">Productos destacados.</h1>
        <div className="product-carousel flex flex-row mx-50 my-10 w-9/12 justify-center items-center">
          {productos.map((producto, index) => (
              <div key={index} className="card flex flex-col w-full h-full items-center justify-center text-pretty">
                <Image className="border border-transparent rounded-full shadow-md max-h-[200px] object-contain bg-white" key={producto.id} src={producto.portrait} alt='...' width={200} height={200}/>
                {/* <p className="mx-5 mt-2 text-[12px] text-gray-500 self-start"># {producto.id}</p> */}
                <h1 className="mx-5 mt-5 text-lg text-red-700 font-bold self-center">{producto.name}</h1>
                <p className="mx-5 text-[14px] text-blue-900 text-center">{producto.description}</p>
                {/* <h1 className="mx-5 mt-2 text-xl text-red-700 font-bold self-start">{producto.price}</h1> */}
              </div>
            ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
