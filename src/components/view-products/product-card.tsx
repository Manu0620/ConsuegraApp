import { currencyFormat } from '@/lib/utils';
import { Button } from '../ui/button';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaOpencart } from 'react-icons/fa6';
import { useCart } from '../cart/cart-context';
import { toast } from '../hooks/use-toast';
import { Products } from '@/app/api/models/products';

export const ProductCard = (product: Products) => {
   const { addToCart, cartItems, updateQuantity } = useCart();

   const handleClick = () => {
      if (cartItems.find((item) => item.id === product.id.toString())) {
         // Actualizar la cantidad del producto en el carrito
         const currentQuantity = cartItems.find(
            (item) => item.id === product.id.toString(),
         )?.quantity;
         if (currentQuantity === undefined) return;
         updateQuantity(product.id.toString(), currentQuantity + 1);

         toast({
            title: 'Producto duplicado !',
            description: <p>Cantidad actualizada.</p>,
         });

         return;
      }

      addToCart({
         id: product.id.toString(),
         name: product.description ?? 'Descripción no disponible',
         price: product.price.toString(),
         portrait: product.image ?? '/LogoMono.png',
         quantity: 1,
      });

      toast({
         title: 'Éxito !',
         description: <p>{product.description} ha sido agregado al carrito</p>,
      });
   };

   return (
      <>
         <div
            key={product.id}
            className="flex flex-col space-y-1 basis-1/5 p-3 rounded-3xl hover:scale-105 hover:px-3 transition ease-linear duration-100"
         >
            <div className="card-content last:flex flex-col text-start space-y-1">
               <Link
                  className="flex flex-col w-full"
                  href={`/productos/${product.id}`}
               >
                  <div className="basis-1/2">
                     <img
                        src={product.image ?? '/LogoGrupo-removebg-preview.png'}
                        alt={product.class}
                        className="flex aspect-square p-3 min-w-full max-w-[200px] max-h-fit object-contain"
                     />
                  </div>
                  <div className="basis-1/2">
                     <p className="text-red-900 font-normal text-[11px]">
                        # {product.id} | {product.class} | {product.brand}
                     </p>
                     <h1 className="text-gray-700 font-semibold text-[14px]">
                        {product.description}
                     </h1>
                     <h1 className="text-red-800 font-bold text-md">
                        {currencyFormat(product.price)}
                        <span className="text-[12px] font-light text-black">
                           <span className="font-bold px-2">|</span>
                        </span>
                     </h1>
                  </div>
               </Link>
            </div>
            <Button
               onClick={handleClick}
               className="text-red-800 font-semibold border border-red-800 rounded-xl hover:bg-red-800 hover:text-white transition ease-in-out duration-200 outline-none flex items-center"
            >
               <FaOpencart className="mr-2" /> Agregar al carrito
            </Button>
         </div>
      </>
   );
};
