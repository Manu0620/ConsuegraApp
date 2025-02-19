'use client';

import { useForm } from 'react-hook-form';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Dialog, DialogClose, DialogContent, DialogTitle } from '../ui/dialog';
import { IoClose, IoEnterSharp } from 'react-icons/io5';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationFormSchema } from '@/lib/utils';
import { Input51 } from '../form/PasswordInput';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { toast } from '../hooks/use-toast';
import { LuLoader2 } from 'react-icons/lu';

interface RegistrationFormData {
   email: string;
   name: string;
   password: string;
   confirmPassword: string;
}

interface RegistrationFormProps {
   isOpen: boolean;
   closeReg: () => void;
}

export const RegistrationForm = ({
   isOpen,
   closeReg,
}: RegistrationFormProps) => {
   const [loading, setLoading] = useState(false);

   const form = useForm<RegistrationFormData>({
      resolver: zodResolver(registrationFormSchema),
      mode: 'onBlur',
   });

   const clearForm = () => {
      form.reset({ name: '', email: '', password: '', confirmPassword: '' });
   };

   const okActions = () => {
      clearForm();
      closeReg();
      setLoading(false);
   };

   const onSubmit = form.handleSubmit(async (data) => {
      setLoading(true);

      const res = await fetch('/api/auth/register', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            name: data.name,
            userEmail: data.email,
            password: data.password,
         }),
      });

      const resData = await res.json();

      if (res.ok) {
         okActions();
         await toast({
            variant: 'success',
            title: 'Usuario registrado',
            description:
               'Se ha enviado un correo de verificación a su dirección de correo electrónico',
         });
      }

      if (res.status === 400) {
         setLoading(false);
         clearForm();
         closeReg();
         await toast({
            variant: 'destructive',
            title: 'Ups 👀',
            description: resData.error,
         });
      }
   });

   return (
      <>
         <Dialog open={isOpen}>
            <DialogContent className="bg-red-50 text-red-800 border-red-800 rounded-3xl lg:w-3/12 md:w-6/12 sm:w-8/12 mobile:w-10/12 mobilesm:w-11/12">
               <DialogTitle className="flex flex-col items-center justify-center text-start">
                  <img
                     src="/LogoMono.png"
                     alt="Logo"
                     className="flex w-24 p-2"
                  />
                  <h1 className="text-red-800 font-bold text-lg leading-none">
                     Registro
                  </h1>
               </DialogTitle>
               <DialogDescription className="text-red-800 italic font-light text-[12px] text-center leading-none">
                  Regístrate para disfrutar de todos nuestros servicios
               </DialogDescription>
               <Form {...form}>
                  <form
                     onSubmit={onSubmit}
                     className="flex flex-col gap-3 w-full"
                  >
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="text-red-800 font-semibold">
                                 Nombre
                              </FormLabel>
                              <FormControl className="border-red-800 w-full focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                 <Input placeholder="Su nombre..." {...field} />
                              </FormControl>
                              <FormMessage className="text-red-800" />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="text-red-800 font-semibold">
                                 Correo electrónico
                              </FormLabel>
                              <FormControl className="border-red-800 w-full focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                 <Input
                                    placeholder="johndoe123@gmail.com..."
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage className="text-red-800" />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="text-red-800 font-semibold">
                                 Contraseña
                              </FormLabel>
                              <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                 <Input51 {...field} />
                              </FormControl>
                              <FormMessage className="text-red-800" />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="text-red-800 font-semibold">
                                 Confirmar contraseña
                              </FormLabel>
                              <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                 <Input
                                    type="password"
                                    placeholder="*********"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage className="text-red-800" />
                           </FormItem>
                        )}
                     />
                     <Button
                        type="submit"
                        className="border border-red-800 text-red-800 font-semibold rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-linear duration-100"
                     >
                        {loading ? (
                           <LuLoader2 className="mr-2 animate-spin" />
                        ) : (
                           <IoEnterSharp className="mr-2" />
                        )}{' '}
                        Registrarse
                     </Button>
                  </form>
               </Form>
               <DialogClose
                  className="text-red-800/75 font-semibold text-2xl absolute z-50 top-3 right-3 hover:text-red-800 transition ease-linear duration-100"
                  onClick={closeReg}
               >
                  <IoClose />
               </DialogClose>
            </DialogContent>
         </Dialog>
      </>
   );
};
