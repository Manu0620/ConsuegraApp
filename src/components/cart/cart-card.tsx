import { currencyFormat } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';
import { useEffect, useState } from 'react';
import { PiTrashSimpleBold } from 'react-icons/pi';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useCart } from './cart-context';

import { AlertDiag } from '../form/alert-dialog';
import { toast } from '../hooks/use-toast';

interface CartCard {
   productId: string;
   image: string;
   name: string;
   price: string;
   q: number;
}

export const CartCard = (cartCard: CartCard) => {
   const [quantity, setQuantity] = useState(cartCard.q);
   const { updateQuantity, removeFromCart } = useCart();
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      updateQuantity(cartCard.productId, cartCard.q);
   }, [cartCard.q]);

   const handleIncrement = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      updateQuantity(cartCard.productId, newQuantity);
   };

   const handleDecrement = () => {
      const newQuantity = quantity > 1 ? quantity - 1 : 1;
      setQuantity(newQuantity);
      updateQuantity(cartCard.productId, newQuantity);
   };

   const handleInputChange = (e: any) => {
      const value = e.target.value;

      if (isNaN(value)) {
         return;
      }

      setQuantity(Number(value)); // Actualiza el valor de la cantidad
      updateQuantity(cartCard.productId, Number(value));
   };

   const handleBlur = (e: any) => {
      const value = e.target.value;
      if (isNaN(value) || quantity < 1) {
         setQuantity(1);
         updateQuantity(cartCard.productId, 1);
      }
   };

   const onAccept = () => {
      removeFromCart(cartCard.productId);
      toast({
         title: 'Producto eliminado',
         description: <p>El producto fue eliminado del carrito.</p>,
      });
      setIsOpen(false);
   };

   const onClose = () => {
      setIsOpen(false);
   };

   return (
      <div
         key={cartCard.productId}
         className="flex flex-row text-pretty py-3 space-x-4 items-center"
      >
         <img
            src={cartCard.image}
            className="w-28 h-28 aspect-square bg-white p-3 border border-red-800 rounded-3xl basis-1/4 object-contain"
         />
         <div className="flex flex-col basis-3/4">
            <Label className="text-black font-bold text-[12px]">
               {cartCard.name}
            </Label>
            <Label className="flex flex-row gap-2 text-red-800 text-sm font-bold">
               {currencyFormat(parseFloat(cartCard.price))}
               <span className="text-black font-normal text-[12px]">
                  | Unidad
               </span>
            </Label>
            <div className="card-footer flex flex-row w-full py-1 items-center text-sm">
               <Button
                  onClick={handleDecrement}
                  className="text-red-800 font-bold border border-red-800 hover:bg-red-800/75 hover:text-white rounded-full hover:scale-105 transition ease-in-out duration-200 outline-none"
               >
                  -
               </Button>
               <Input
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  value={quantity}
                  className="border-none font-medium text-sm w-20  text-red-800 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
               />
               <Button
                  onClick={handleIncrement}
                  className="text-red-800 font-bold border border-red-800 hover:bg-red-800/75 hover:text-white rounded-full hover:scale-105 transition ease-in-out duration-200 outline-none"
               >
                  +
               </Button>
               <Button
                  onClick={() => setIsOpen(true)}
                  className="w-fit text-red-800 hover:text-red-700 rounded-full hover:scale-105 transition ease-in-out duration-200 outline-none"
               >
                  <PiTrashSimpleBold width={16} className="text-red-800" />
               </Button>

               <AlertDiag
                  title="Estas seguro?"
                  description="Este producto sera eliminado del carrito."
                  isOpen={isOpen}
                  onAccept={onAccept}
                  onClose={onClose}
               />
            </div>
         </div>
      </div>
   );
};
