"use client";

import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { productos } from "@/data/productos";

import { ProductCard } from "@/components/view-products/product-card";


export default function Products() {

    const addCart = () => {
        console.log('Producto agregado al carrito');
    }

    return(
        <main className="flex min-h-screen flex-col items-center p-0 bg-red">
            <section 
                className="hero-products flex flex-row mt-48 bg-white shadow-md text-center items-center w-full min-h-60 overflow-hidden"> 
                <h1 className="flex flex-col ml-28 text-red-800 font-bold leading-none mobilesm:text-2xl mobile:text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                    Nuestros productos
                </h1>
            </section>
            <section 
                className="product-container flex flex-col bg-white border-b border-t border-red-700 w-full min-h-[60vh] items-start"> 
                <div 
                    className="filters-container flex flex-row bg-red-50 border-r border-red-700 text-start py-12 px-52 w-full">
                    <h1 className="text-red-800 font-bold text-3xl">Filtros</h1>
                    
                </div>
                <div className="product-list flex flex-row flex-wrap py-12 px-6 justify-center w-full">
                    {productos.map((product, index) => (
                        <ProductCard 
                            key={index}  
                            id={product.id.toString()} 
                            addCart={() => addCart()}
                            portrait={product.portrait} 
                            name={product.name} 
                            price={product.price} 
                            description={product.description} />
                    ))}
                </div>
            </section>
            
        </main>
    );
}

