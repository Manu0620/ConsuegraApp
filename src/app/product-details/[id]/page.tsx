"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { productos  } from "@/data/productos";
import { ProductCarousel } from "@/components/view-products/images-carousel";
import { currencyFormat } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Scroll } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Label } from "@radix-ui/react-label";

export default function ProductDetails() {
    const params = useParams();
    const productId = params.id;
    const product = productos.find(product => product.id.toString() === productId);    

    useEffect(() => {
        const fetchProduct = async () => {
            if (productId) {
                const res = await fetch('http://192.168.1.233:8080/api/products?id_product=PVC-345');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                    }
                let data = await res.json();
                console.log(data);
            }
        };
        fetchProduct();
    }, [productId]);

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return(

        <main className="flex flex-col items-center p-0 bg-red">
            <section 
                className="hero-products flex flex-col w-full min-h-fit py-12 px-6 bg-white border-b border-red-700 mt-48 shadow-md text-start items-center overflow-hidden"> 
                <div className="flex flex-row flex-wrap gap-12 w-10/12 min-h-fit text-start justify-center">
                    <ProductCarousel images={product ? product.images: []} />
                    <ScrollArea className="h-20 flex flex-col space-y-3"> 
                        <h1 className="flex flex-col text-red-800 font-bold leading-snug mobilesm:text-xl mobile:text-xl sm:text-2xl md:text-3xl lg:text-3xl">
                            {product ? product.name : 'Producto no encontrado'}
                            <span className="text-[16px] font-normal text-black">Categoria</span>
                        </h1>
                        <h1 className="flex flex-col text-black font-bold text-xl">
                            {product ? currencyFormat(parseFloat(product.price)) : ''}
                            <span className="text-sm font-light text-red-800">Unidad</span>     
                        </h1>
                        {product?.images ? 
                            <div className="flex flex-row border-t-2 border-red-700 py-3 ">
                                {product.images.map((image, index) => (
                                    <img key={index} src={image} className="w-24 h-28 p-2 space-x-2 aspect-square contrast-125 rounded-xl basis-1/4 object-contain hover:border-black hover:border" />                           
                                ))}
                            </div> 
                        : null}
                        <p className="text-green-700 text-sm font-medium">In Stock</p>
                        <p className="text-gray-700 font-light max-w-lg">
                            {product ? product.description : ''}
                        </p>
                        <div className="flex flex-row items-center py-2">
                            <div className="pr-2">
                                <Button onClick={handleDecrement} className="text-red-800 border border-red-800 rounded-xl hover:bg-red-800 hover:text-white outline-none">
                                    -
                                </Button>
                                <Label id="quantity" className="text-red-800 font-bold text-sm px-6">
                                    {quantity}
                                </Label>
                                <Button onClick={handleIncrement} className="text-red-800 border border-red-800 rounded-xl hover:bg-red-800 hover:text-white outline-none">
                                    +
                                </Button>
                            </div>
                            <div className="grow">
                                <Button className="text-red-800 w-full text-md border border-red-800 self-center font-medium rounded-xl hover:bg-red-700 hover:text-white outline-none">
                                    Agregar al carrito
                                </Button>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </section>
        </main>

    );

}