'use client';

import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';

import {
   Table,
   TableBody,
   TableCell,
   TableFooter,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table';

import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';

import { Textarea } from '../ui/textarea';

import {
   checkFormSchema,
   currencyFormat,
   verificationFormSchema,
} from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaOpencart } from 'react-icons/fa6';
import { GrSend } from 'react-icons/gr';
import { useCart } from '../cart/cart-context';
import { toast } from '../hooks/use-toast';
import { Button } from '../ui/button';
import { CustomerInfoForm } from './customer-info-form';
import { VerificationForm } from './customer-verification';
import { LuLoader2 } from 'react-icons/lu';
import { CheckCircle2 } from 'lucide-react';
import { IoIosSend } from 'react-icons/io';

interface FormData {
   names: string;
   lastnames: string;
   phone: string;
   email: string;
   address1: string;
   address2?: string; // Campo opcional
   advice?: string; // Campo opcional
}

interface FormDataVerification {
   email: string;
}

export const CheckoutForm = () => {
   const [page, setPage] = useState(1);
   const { cartItems, subtotal, clearCart } = useCart();
   const [verified, setVerified] = useState(false);
   const [loading, setLoading] = useState(false);

   // Luego, usa el tipo en useForm
   const customerForm = useForm<FormData>({
      resolver: zodResolver(checkFormSchema),
      mode: 'onBlur',
   });

   const verificationForm = useForm<FormDataVerification>({
      resolver: zodResolver(verificationFormSchema),
      mode: 'onBlur',
   });

   const handlePrevPage = () => {
      setPage(page - 1);
   };

   const onSubmitVerification = verificationForm.handleSubmit(
      async (data: FormDataVerification) => {
         const isValid = await verificationForm.trigger();

         if (!isValid) {
            toast({
               variant: 'destructive',
               title: 'Error !',
               description: 'Por favor, complete los campos requeridos.',
            });
            return;
         }

         const res = await fetch(`/api/customers/${data.email}`);

         console.log(data);

         const customer = await res.json();

         setLoading(true);
         if (res.ok) {
            setVerified(true);
            setPage(3);
            setLoading(false);
            toast({
               variant: 'success',
               title: 'Gracias !',
               description: 'Verificado con éxito.',
            });
         } else {
            setPage(2);
            setLoading(false);
            toast({
               variant: 'destructive',
               title: 'Error !',
               description: 'Su correo no se encuentra en nuestros registros.',
            });
         }

         await verificationForm.reset(
            { email: '' },
            { keepValues: false, keepDefaultValues: false },
         );
      },
   );

   const onSubmitCustomer = customerForm.handleSubmit(
      async (data: FormData) => {
         console.log(data);
         const isValid = await customerForm.trigger();

         if (!isValid) {
            toast({
               variant: 'destructive',
               title: 'Error !',
               description: 'Por favor, complete los campos requeridos.',
            });
            return;
         }

         const res = await fetch('/api/customers', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               name: data.names + ' ' + data.lastnames,
               phone: data.phone,
               email: data.email,
               address: data.address1 + ' ' + data.address2,
            }),
         });

         setLoading(true);
         if (res.ok) {
            let customer = await res.json();
            setLoading(false);
            setPage(3);
            toast({
               variant: 'success',
               title: `Bienvenido ${customer.name}!`,
               description: 'Tus datos han sido registrados con éxito.',
            });
            // Reset form and cart
            customerForm.reset(
               {
                  names: '',
                  lastnames: '',
                  phone: '',
                  email: '',
                  address1: '',
                  address2: '',
                  advice: '',
               },
               { keepValues: false, keepDefaultValues: false },
            );
         }
      },
   );

   return (
      <>
         <Dialog>
            <DialogTrigger
               disabled={cartItems.length > 0 ? false : true}
               className="flex items-center justify-center text-red-800 text-center w-full px-4 py-2 font-bold text-sm border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-in-out duration-200 outline-none"
            >
               <GrSend className="mr-2" /> Realizar cotización
            </DialogTrigger>
            <DialogContent className="bg-white text-red-800 border-2 border-red-800 rounded-3xl lg:w-1/2 md:w-8/12 sm:w-11/12 mobile:w-11/12 mobilesm:w-11/12">
               <DialogHeader className="leading-none border-b-2 border-red-800 p-5">
                  <DialogTitle className="flex flex-row gap-2 font-semibold">
                     <GrSend />{' '}
                     {page == 1
                        ? 'Verificación'
                        : page == 2
                          ? 'Cotización'
                          : 'Confirmación'}
                  </DialogTitle>
                  <DialogDescription className="w-full font-light">
                     {page == 1
                        ? 'Por favor, complete el proceso de verificación.'
                        : page == 2
                          ? 'Por favor, complete el formulario para enviar su cotización.'
                          : 'Por favor, revise su cotización antes de enviarla.'}
                  </DialogDescription>
               </DialogHeader>
               {page == 2 ? (
                  <VerificationForm
                     form={verificationForm}
                     onSubmit={onSubmitVerification}
                     loading={loading}
                  />
               ) : page == 1 ? (
                  <CustomerInfoForm
                     form={customerForm}
                     onSubmit={onSubmitCustomer}
                  />
               ) : page == 3 ? (
                  <>
                     <DialogTitle className="flex flex-row p-3 font-semibold">
                        <FaOpencart className="mr-2" /> Productos en el carrito
                     </DialogTitle>

                     <div className="overflow-y-auto max-h-[200px]">
                        <Table className="border-b border-red-800 font-medium">
                           <TableHeader className="font-bold border-b border-t border-red-800">
                              <TableHead>Nombre</TableHead>
                              <TableHead>Cantidad</TableHead>
                              <TableHead className="text-right font-semibold">
                                 Precio
                              </TableHead>
                              <TableHead className="text-right font-semibold">
                                 Total
                              </TableHead>
                           </TableHeader>
                           <TableBody className="text-black text-[12px]">
                              {cartItems.map((item, index) => (
                                 <TableRow key={index}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell className="text-right">
                                       {currencyFormat(parseFloat(item.price))}
                                    </TableCell>
                                    <TableCell className="text-right">
                                       {currencyFormat(
                                          item.quantity *
                                             parseFloat(item.price),
                                       )}
                                    </TableCell>
                                 </TableRow>
                              ))}
                           </TableBody>
                           <TableFooter className="font-semibold">
                              <TableRow>
                                 <TableCell colSpan={2}></TableCell>
                                 <TableCell className="text-right">
                                    Subtotal
                                 </TableCell>
                                 <TableCell className="text-right">
                                    {currencyFormat(subtotal)}
                                 </TableCell>
                              </TableRow>
                           </TableFooter>
                        </Table>
                     </div>

                     <Form {...customerForm}>
                        <form
                           onSubmit={onSubmitCustomer}
                           className="customer-info flex flex-col gap-5 text-start "
                        >
                           <FormField
                              control={customerForm.control}
                              name="advice"
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel className="text-red-800 font-semibold">
                                       Nota
                                    </FormLabel>
                                    <FormControl className="border-red-800 text-red-800 hover:bg-red-800/25 font-medium rounded-xl">
                                       <Textarea
                                          placeholder="Esperamos tu nota..."
                                          className="resize-none"
                                          {...field}
                                       />
                                    </FormControl>
                                    <FormMessage className="text-[12px] text-red-800" />
                                 </FormItem>
                              )}
                           />
                        </form>
                     </Form>
                  </>
               ) : null}

               <DialogFooter className="border-t border-red-800/25 pt-5">
                  {page == 1 ? (
                     <Form {...verificationForm}>
                        <Button
                           onClick={onSubmitVerification}
                           className="text-red-800 font-semibold text-sm w-1/4 border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white transition ease-linear duration-200"
                        >
                           {loading ? (
                              <LuLoader2 className="mr-2 animate-spin" />
                           ) : (
                              <CheckCircle2 className="mr-2" />
                           )}
                           Verificar
                        </Button>
                     </Form>
                  ) : page == 2 ? (
                     <Form {...customerForm}>
                        <>
                           {!verified ? (
                              <Button
                                 onClick={handlePrevPage}
                                 className="text-red-800 font-semibold text-sm w-1/4 border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white transition ease-linear duration-200"
                              >
                                 {loading ? (
                                    <LuLoader2 className="mr-2 animate-spin" />
                                 ) : (
                                    <IoIosSend className="mr-2" />
                                 )}
                                 Atrás
                              </Button>
                           ) : null}

                           <Button
                              onClick={onSubmitCustomer}
                              className="text-red-800 font-semibold text-sm w-1/4 border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white transition ease-linear duration-200"
                           >
                              {loading ? (
                                 <LuLoader2 className="mr-2 animate-spin" />
                              ) : (
                                 <IoIosSend className="mr-2" />
                              )}
                              Enviar
                           </Button>
                        </>
                     </Form>
                  ) : page == 3 ? (
                     <Button
                        type="submit"
                        className="text-red-800 self-end font-semibold text-sm w-1/4 border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white transition ease-in-out duration-200"
                     >
                        <IoIosSend className="mr-2" /> Enviar cotización
                     </Button>
                  ) : null}
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </>
   );
};
