'use client';

import { FiltersForm } from '@/components/view-products/filters-form';
import { ProductCard } from '@/components/view-products/product-card';
import { productos } from '@/data/productos';

export default function Products() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      <section className="hero-products flex flex-row mt-48 bg-white shadow-md text-center items-center w-full min-h-60 overflow-hidden">
        <h1 className="flex flex-col ml-28 text-red-800 font-bold leading-none mobilesm:text-2xl mobile:text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          Nuestros productos
        </h1>
      </section>
      <section className="product-container flex flex-col bg-white border-b border-t border-red-700 w-full min-h-[60vh] items-start">
        <div className="filters-container flex flex-col bg-red-50 border-r border-red-700 text-start py-12 px-6 w-full ">
          {/* <h1 className="text-red-800 font-semibold text-3xl self-center pb-3">Búsqueda</h1> */}
          <div className="flex flex-col w-full">
            <FiltersForm />
            <div className="flex flex-row"></div>
          </div>
        </div>
        <div className="product-list flex flex-row flex-wrap py-12 px-6 justify-center items-end w-full">
          {productos.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id.toString()}
              portrait={product.portrait}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
