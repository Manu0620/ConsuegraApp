'use client';

import {
    Sheet,
    SheetClose,
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
import { CartCard } from './cart-card';
import { useCart } from './cart-context';
import { Button } from '../ui/button';
import { GrSend } from 'react-icons/gr';
import { PiEmpty, PiEmptyBold, PiSealWarningFill } from 'react-icons/pi';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useUser } from '../auth/userContext';
import { LoginForm } from '../auth/login-form';
import { toast } from '../hooks/use-toast';

export const CartSheet = () => {
  const { cartItems, subtotal } = useCart();
  const [ openCart, setOpenCart ] = useState(false);
  const [ openLogin, setOpenLogin ] = useState(false);
 
  const router = useRouter();
  const { user, loading } = useUser();

  useEffect(()  => {
    if(openCart == true){
      setOpenLogin(false);
    }
  }, [openCart])

  const redirectToCheckout = () => {
    if(!loading){
      if(!user){
        setOpenLogin(true);
        setOpenCart(false);
        toast({
          variant: 'warning',
          title: 'Inicia sesión', 
          description: 'Inicia sesión para continuar con la cotización',
          icon: <PiSealWarningFill size={24} className="text-yellow-800" />
        })
        return;
      }
      router.push('/checkout');
      setOpenCart(false);
    }
  }

  return (
    <Sheet open={openCart}>
      <SheetTrigger
        className="self-center text-red-800 hover:scale-110 hover:text-red-900 transition ease-linear duration-100"
        asChild
        onClick={() => setOpenCart(true)}
      >
        <FaOpencart size={36} className='drop-shadow-lg' />
      </SheetTrigger>
      <SheetContent className="flex flex-col w-1/4">
        <SheetHeader>
          <SheetTitle className="flex flex-row text-red-800 font-bold text-2xl border-b-2 p-3 border-red-800">
            <FaOpencart className="mr-2" /> Carrito
          </SheetTitle>
          {cartItems.length > 0 ? (
            <SheetDescription className="flex flex-row text-red-800 font-medium justify-center text-lg">
              <span className="text-sm"> Subtotal </span>{' '}
              <span className="px-2 font-bold"> {currencyFormat(subtotal)} </span>
            </SheetDescription>
          ): null}
        </SheetHeader>
        <ScrollArea className="flex flex-col grow">
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
            <div className="flex flex-col grow gap-2 items-center justify-center">
              <PiEmpty size={48} className="text-red-800" />
              <p className="text-red-800 font-bold text-md" >
                No hay productos en el carrito
              </p>
            </div>
          )}
        </ScrollArea>
        {cartItems.length > 0 ? (
          <SheetFooter className="border-t-2 p-3 border-red-700">
            {/* <Button className="text-red-800 w-full font-bold text-sm border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-in-out duration-200 outline-none flex items-center">
                  <GrSend className="mr-2" /> Enviar cotizacion
              </Button> */}
              <Button 
                disabled={cartItems.length > 0 ? false : true} 
                className="flex items-center justify-center text-red-800 text-center w-full px-4 py-2 font-bold text-sm border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-in-out duration-200 outline-none"
                onClick={redirectToCheckout}
                >
                <GrSend className="mr-2" /> Realizar cotización
              </Button>
          </SheetFooter> 
        ) : null}
        <SheetClose 
          className="text-red-800 font-semibold text-3xl absolute z-50 top-5 right-5 hover:text-red-800 transition ease-linear duration-100" 
          onClick={() => setOpenCart(false)}>
             <IoClose />
        </SheetClose>
        {!loading && !user? (
        <LoginForm open={openLogin} close={() => setOpenLogin(false)} setOpen={() => setOpenLogin}/>): null}
      </SheetContent>
    </Sheet>
  );
};
