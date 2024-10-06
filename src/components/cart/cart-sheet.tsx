'use client';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { ScrollArea } from '@/components/ui/scroll-area';
import { currencyFormat } from '@/lib/utils';
import { FaOpencart } from 'react-icons/fa6';
import { CheckoutForm } from '../form/checkout-form';
import { CartCard } from './cart-card';
import { useCart } from './cart-context';

export const CartSheet = () => {
  const { cartItems, subtotal } = useCart();

  return (
    <Sheet>
      <SheetTrigger
        className="self-center text-red-700 hover:scale-110 hover:text-red-800 transition ease-in-out duration-200"
        asChild
      >
        <FaOpencart size={36} />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex flex-row text-red-800 font-bold text-2xl border-b-2 p-3 border-red-800">
            <FaOpencart className="mr-2" /> Carrito
          </SheetTitle>
          <SheetDescription className="flex flex-row text-red-800 font-medium justify-center text-lg">
            <span className="text-sm"> Subtotal </span>{' '}
            <span className="px-2 font-bold"> {currencyFormat(subtotal)} </span>
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex grow">
          {cartItems.length > 0 ? (
            cartItems.map((product, index) => (
              <CartCard
                key={index}
                productId={product.id.toString()}
                image={product.portrait}
                name={product.name}
                price={product.price}
                q={product.quantity}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-96">
              <FaOpencart size={48} className="text-red-800" />
              <p className="text-red-800 font-semibold text-md">
                No hay productos en el carrito
              </p>
            </div>
          )}
        </ScrollArea>
        <SheetFooter className="border-t-2 p-3 border-red-700">
          {/* <Button className="text-red-800 w-full font-bold text-sm border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-in-out duration-200 outline-none flex items-center">
                        <GrSend className="mr-2" /> Enviar cotizacion
                    </Button> */}
          <CheckoutForm />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
