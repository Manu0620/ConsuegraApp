'use client';

import { FiltersForm } from '@/components/view-products/filters-form';
import { ProductCard } from '@/components/view-products/product-card';
import { productos } from '@/data/productos';
import { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress"
import { filtersFormSchema } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  category?: string;
}

interface FormData {
  search: string,
  byCategory: string,
  desde: number,
  hasta: number
}

export default function Products() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener los productos desde el endpoint de la API
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products'); // El endpoint de tu API
      const data = await response.json();

      if (response.ok) {
        setProducts(data.products);
      } else {
        setError(data.error || 'Failed to load products');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(filtersFormSchema),
    mode: 'onChange',
  })

  const onSubmit = form.handleSubmit( async (formData) => {
    const { search, byCategory, desde, hasta } = formData;

    await fetchProducts();

    if(!formData.search && !formData.byCategory && !formData.desde && !formData.hasta) {
      return;
    }

    const filteredProducts = products.filter(product => {
      const searchMatch = product.title.toLowerCase().includes(search.toLowerCase());
      const categoryMatch = byCategory === '' || product.category === byCategory;
      const priceMatch = Number(product.price) >= desde && Number(product.price) <= hasta;

      return searchMatch || categoryMatch || priceMatch;
    });

    setProducts(filteredProducts);

    console.log(filteredProducts, search, byCategory, desde, hasta);

  });

  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-red">
      {/* <section className="hero-products flex flex-row mt-48 bg-white shadow-md text-center items-center w-full min-h-60 overflow-hidden">
        <h1 className="flex flex-col ml-28 text-red-800 font-bold leading-none mobilesm:text-2xl mobile:text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          Nuestros productos
        </h1>
      </section> */}
      <section className="product-container flex flex-col mt-48 bg-white border-b border-t border-red-700 w-full min-h-[60vh] items-start">
        <div className="filters-container flex flex-col bg-red-50 border-r border-red-700 text-start py-12 px-6 w-full ">
          {/* <h1 className="text-red-800 font-semibold text-3xl self-center pb-3">Búsqueda</h1> */}
          <div className="flex flex-col w-full">
            <FiltersForm form={form} onSubmit={onSubmit} />
            <div className="flex flex-row"></div>
          </div>
        </div>
        {loading ? (
            <div className="flex flex-col items-center justify-center text-center w-full min-h-[60vh]">
              <h1 className="text-red-800 font-semibold text-xl animate-bounce">Cargando...</h1>
            </div>
          ) : error ? (
            <div className="flex flex-row justify-center items-center w-full h-full">
              <h1 className="text-red-800 font-semibold text-3xl self-center">{error}</h1>
            </div>
          ) : (
            <div className="product-list flex flex-row flex-wrap py-12 px-6 justify-center items-end w-full">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    id={product.id.toString()}
                    portrait={product.image}
                    name={product.title}
                    category={product.category}
                    price={product.price}
                    description={product.description}
                    unit='Unidad'
                  />
                ))}
            </div>
          )}
      </section>
    </main>
  );
}
