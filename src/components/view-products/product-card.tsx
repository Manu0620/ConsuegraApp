
import { currencyFormat } from "@/lib/utils";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";

interface Props{    
    id: string,
    name: string,
    price: string,
    portrait: string,
    description: string,
    addCart: any
}

export const ProductCard = (props: Props) => {

    return(
        <>
            <div key={props.id} className="flex flex-col space-y-1 basis-1/5 p-3 rounded-3xl">     
                <div className="card-content last:flex flex-col text-start space-y-1">
                    <Link className="w-full" href={`/product-details/${props.id}`}>
                        <img
                            src={props.portrait}
                            alt={props.name}
                            className="aspect-square max-w-[200px] contrast-125 self-center max-h-fit object-contain"
                        />
                        <p className="text-black font-light text-[12px]">
                            # {props.id} | Categoria
                        </p>
                        <h1 className="text-black font-bold text-[16px]">
                            {props.name}
                        </h1>
                        <h1 className="text-red-700 font-bold text-sm">
                            {currencyFormat(parseFloat(props.price))}
                            <span className="text-[12px] font-light text-black"><span className="font-bold px-2">|</span> Unidad</span>
                        </h1>
                    </Link>
                </div>
                <Button onClick={props.addCart} className="text-red-800 border border-red-800 rounded-xl hover:bg-red-800 hover:text-white transition ease-in-out duration-200 outline-none flex items-center">
                    <FaOpencart className="mr-2" /> Agregar al carrito
                </Button>

            </div>
        </>    
    );
}
