'use client';

import { use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { filtersFormSchema } from '@/lib/utils';
import type { Products } from '../api/models/products';
import { ProductCard } from '@/components/view-products/product-card';
import { FiltersForm } from '@/components/view-products/filters-form';
import { LuLoader2 } from 'react-icons/lu';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectValue,
   SelectTrigger,
} from '@/components/ui/select';
import { set } from 'zod';

interface FormData {
   search: string;
   class: string;
   desde: number;
   hasta: number;
}

export default function Products() {
   const [products, setProducts] = useState<Products[]>([]);
   const [pagination, setPagination] = useState({
      totalProducts: 0,
      totalPages: 0,
      currentPage: 1,
      pageSize: 10,
   });
   // Estado para mantener los filtros actuales
   const [filters, setFilters] = useState<FormData>({
      search: '',
      class: '',
      desde: 0,
      hasta: 0,
   });
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(15);

   const form = useForm<FormData>({
      resolver: zodResolver(filtersFormSchema),
      mode: 'onBlur',
   });

   // Función para crear parámetros de consulta
   const createQueryParams = (filterData: FormData): URLSearchParams => {
      const params = new URLSearchParams(
         Object.entries(filterData).filter(
            ([_, value]) => value !== undefined && value !== '',
         ),
      );
      params.set('page', page.toString());
      params.set('limit', limit.toString());
      return params;
   };

   // Función para obtener productos
   const fetchProducts = async (params: URLSearchParams) => {
      try {
         setLoading(true);

         const response = await fetch(`/api/products?${params.toString()}`);
         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || 'Failed to load products');
         }

         setProducts(data.products);
         setPagination(data.pagination);
         setError(null);
      } catch (err) {
         setError('Ocurrió un error al cargar los productos.');
         setProducts([]);
      } finally {
         setLoading(false);
      }
   };

   // Función para aplicar filtros y reiniciar a la página 1
   const filterProducts = async () => {
      const formData = form.getValues();
      const desde = Number(formData.desde);
      const hasta = Number(formData.hasta);

      console.log(formData);

      // Validación de 'desde' y 'hasta'
      if (desde > hasta) {
         setError('El valor de "desde" no puede ser mayor que "hasta"');
         setLoading(false);
         return;
      }

      setPage(1); // Reinicia a la primera página
      setFilters(formData); // Actualiza el estado de los filtros actuales
   };

   // useEffect para la carga inicial y actualización al cambiar de página o límite
   useEffect(() => {
      const params = createQueryParams(filters);
      fetchProducts(params);
   }, [page, limit, filters]);

   // Renderizado condicional en componentes separados
   const LoadingComponent = () => (
      <div className="flex flex-col items-center justify-center text-center w-full h-[70vh]">
         <LuLoader2 size={72} className="text-red-800 animate-spin" />
      </div>
   );

   const ErrorComponent = () => (
      <div className="flex flex-row justify-center items-center w-full h-[70vh]">
         <h1 className="text-red-800 font-semibold text-3xl self-center">
            {error}
         </h1>
      </div>
   );

   const ProductsList = () => (
      <div className="product-list flex flex-row flex-wrap grow px-8 justify-center items-center w-full">
         {products.length > 1 ? (
            products.map((product, index) => (
               <ProductCard
                  key={index}
                  id={product.id.toString()}
                  image={product.image}
                  description={product.description}
                  class={product.class}
                  price={product.price}
                  minimumPrice={product.minimumPrice}
                  inventory={product.inventory}
                  brand={product.brand}
               />
            ))
         ) : (
            <h1 className="text-red-800 font-semibold text-2xl">
               😥 No se encontraron productos
            </h1>
         )}
      </div>
   );

   return (
      <main className="flex min-h-screen flex-col items-center p-0 bg-red">
         <section className="product-container flex flex-col mt-48 bg-white border-b border-t border-red-700 w-full min-h-[100vh] items-start">
            <div className="filters-container flex flex-col border-b bg-red-50 text-start py-12 px-6 w-full">
               <div className="flex flex-col w-full">
                  <FiltersForm form={form} filterProducts={filterProducts} />
               </div>
            </div>
            {loading ? (
               <LoadingComponent />
            ) : error ? (
               <ErrorComponent />
            ) : (
               <>
                  <div className="flex flex-row justify-between p-8 w-full">
                     <div className="flex flex-row items-center scale-95">
                        <button
                           onClick={() =>
                              setPage((prev) => Math.max(prev - 1, 1))
                           }
                           disabled={page === 1}
                           className="text-red-800"
                        >
                           <IoChevronBack size={32} />
                        </button>
                        <p className="text-red-800 font-semibold px-2">
                           {' '}
                           Page {page} of {pagination.totalPages}
                        </p>
                        <button
                           onClick={() =>
                              setPage((prev) =>
                                 Math.min(prev + 1, pagination.totalPages),
                              )
                           }
                           disabled={page === pagination.totalPages}
                           className="text-red-800"
                        >
                           <IoChevronForward size={32} />
                        </button>
                     </div>
                     <div className="flex flex-row items-center w-">
                        <Select
                           value={limit.toString()}
                           onValueChange={(value) => {
                              setLimit(Number(value));
                              setPage(1);
                           }}
                        >
                           <SelectTrigger className="text-red-800 font-semibold border border-red-800 rounded-xl px-2 mr-4 w-1/2">
                              <SelectValue placeholder="Seleccione límite" />
                           </SelectTrigger>
                           <SelectContent className="rounded-xl text-red-800">
                              <SelectItem value="10">10</SelectItem>
                              <SelectItem value="15">15</SelectItem>
                              <SelectItem value="20">20</SelectItem>
                              <SelectItem value="25">25</SelectItem>
                           </SelectContent>
                        </Select>
                        <p className="text-red-800 font-normal text-[12px] w-1/2">
                           Showing {pagination.pageSize} of{' '}
                           {pagination.totalProducts}
                        </p>
                     </div>
                  </div>
                  <ProductsList />
                  <div className="flex flex-row justify-between p-8 w-full">
                     <p className="flex text-red-800 font-semibold text-[14px]">
                        Showing {pagination.pageSize} of{' '}
                        {pagination.totalProducts}
                     </p>
                     <div className="flex flex-row items-center">
                        <button
                           onClick={() =>
                              setPage((prev) => Math.max(prev - 1, 1))
                           }
                           disabled={page === 1}
                           className="text-red-800"
                        >
                           <IoChevronBack size={32} />
                        </button>
                        <p className="text-red-800 font-semibold px-2">
                           {' '}
                           Page {page} of {pagination.totalPages}
                        </p>
                        <button
                           onClick={() =>
                              setPage((prev) =>
                                 Math.min(prev + 1, pagination.totalPages),
                              )
                           }
                           disabled={page === pagination.totalPages}
                           className="text-red-800"
                        >
                           <IoChevronForward size={32} />
                        </button>
                     </div>
                  </div>
               </>
            )}
         </section>
      </main>
   );
}
