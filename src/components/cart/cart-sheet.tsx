
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { IoMdCart } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area"
import { CartCard } from "./cart-card";
import { useState } from "react";
import { FaOpencart } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { productos } from "@/data/productos";



export const CartSheet = () => {
    
    const cartSize = productos.length;
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button className='self-center pl-4 text-red-700 hover:scale-110 hover:text-red-800 transition ease-in-out duration-200 '>
                    <FaOpencart size={36}/>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle className="flex flex-row text-red-800 font-bold text-2xl border-b-2 p-3 border-red-700">
                        <FaOpencart className="mr-2" /> Carrito
                    </SheetTitle>
                    <SheetDescription>
                        
                    </SheetDescription>
                </SheetHeader>
                <ScrollArea className="flex grow">
                    { cartSize > 0 ? (
                            productos.map((product, index) => (
                                <CartCard 
                                    key={index}
                                    productId={product.id.toString()}
                                    image={product.portrait}
                                    name={product.name}
                                    price={product.price}
                                    q={1}
                                />
                            ))
                        ): (
                            <div className="flex flex-col items-center justify-center w-full h-96">
                                <FaOpencart size={48} className="text-red-800"/>
                                <p className="text-red-800 font-normal text-md">No hay productos en el carrito</p>
                            </div>
                        )
                    }
                </ScrollArea>
                <SheetFooter className="border-t-2 p-3 border-red-700">
                    <Button className="text-red-800 w-full font-bold text-sm border border-red-800 rounded-xl hover:bg-red-800 hover:text-white hover:scale-105 transition ease-in-out duration-200 outline-none flex items-center">
                        <GrSend className="mr-2" /> Enviar cotizacion
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}