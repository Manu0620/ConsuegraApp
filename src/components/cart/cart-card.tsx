
import { Label } from "@radix-ui/react-label"
import { Button } from "../ui/button"
import { useState } from "react";
import { currencyFormat } from "@/lib/utils";

interface CartCard {
    productId: string,
    image: string,
    name: string,
    price: string,
    q: number,
}

export const CartCard = (cartCard : CartCard ) => {
    const [quantity, setQuantity] = useState(cartCard.q); 

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    
    return (

        <div key={cartCard.productId} className="flex flex-row text-pretty py-3 space-x-4 items-center">    
            <img src={cartCard.image} className="w-28 h-28 aspect-square contrast-125 border border-red-800 rounded-3xl basis-1/4 object-fit" />                           
            <div className="flex flex-col space-y-2 basis-3/4 leading-tight">
                <Label className="text-black font-bold">
                    {cartCard.name}
                </Label>
                <Label className="flex flex-col text-red-800 font-bold">
                    {currencyFormat(parseFloat(cartCard.price))}
                    <span className="text-black font-normal text-[12px]">Unidad</span>
                </Label>
                <div className="card-footer flex flex-row w-full items-center text-sm">
                    <Button 
                        onClick={handleDecrement} 
                        className="text-red-800 font-bold border border-red-800 hover:bg-red-800/75 hover:text-white rounded-full hover:scale-105 transition ease-in-out duration-200 outline-none">
                        -
                    </Button>
                    <Label id="quantity" className="text-red-800 font-bold px-6">{quantity}</Label>
                    <Button 
                        onClick={handleIncrement} 
                        className="text-red-800 font-bold border border-red-800 hover:bg-red-800/75 hover:text-white rounded-full hover:scale-105 transition ease-in-out duration-200 outline-none">
                        +
                    </Button>
                </div> 
            </div>
        </div>

    )
}