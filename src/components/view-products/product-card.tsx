
import { currencyFormat } from "@/lib/utils";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { useCart } from "../cart/cart-context";
import { toast } from "../hooks/use-toast";

interface Props{    
    id: string,
    name: string,
    price: string,
    portrait: string,
    description: string,
}

export const ProductCard = (product: Props) => {

    const { addToCart, cartItems, updateQuantity } = useCart();

    const handleClick = () => {
        if (cartItems.find(item => item.id === product.id.toString())){
            // Actualizar la cantidad del producto en el carrito
            const currentQuantity = cartItems.find(item => item.id === product.id.toString())?.quantity;
            if(currentQuantity === undefined) return;
            updateQuantity(product.id.toString(), currentQuantity + 1);
            
            toast({
                title: "Producto duplicado !",
                description: (
                    <p>
                        Cantidad actualizada.
                    </p>
                ),
            })

            return;
        }

        addToCart({
            id: product.id.toString(),
            name: product.name,
            price: product.price,
            portrait: product.portrait,
            quantity: 1
        });

        toast({
            title: "Éxito !",
            description: (
                <p>
                    {product.name} ha sido agregado al carrito
                </p>
            ),
          })
    }

    return(
        <>
            <div key={product.id} className="flex flex-col space-y-1 basis-1/5 p-3 rounded-3xl">     
                <div className="card-content last:flex flex-col text-start space-y-1">
                    <Link className="w-full" href={`/product-details/${product.id}`}>
                        <img
                            src={product.portrait}
                            alt={product.name}
                            className="aspect-square min-w-[200px] max-w-[200px] contrast-125 self-center max-h-fit object-contain"
                        />
                        <p className="text-black font-light text-[12px]">
                            # {product.id} | Categoría
                        </p>
                        <h1 className="text-black font-semibold text-[16px]">
                            {product.name}
                        </h1>
                        <h1 className="text-red-700 font-bold text-sm">
                            {currencyFormat(parseFloat(product.price))}
                            <span className="text-[12px] font-light text-black"><span className="font-bold px-2">|</span> Unidad</span>
                        </h1>
                    </Link>
                </div>
                <Button onClick={handleClick} className="text-red-800 font-semibold border border-red-800 rounded-xl hover:bg-red-800 hover:text-white transition ease-in-out duration-200 outline-none flex items-center">
                    <FaOpencart className="mr-2" /> Agregar al carrito
                </Button>

            </div>
        </>    
    );
}
