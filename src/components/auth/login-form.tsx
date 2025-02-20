'use client';

import { loginFormSchema } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEnterSharp } from 'react-icons/io5';
import { LuLoader2 } from 'react-icons/lu';
import { MdDangerous } from 'react-icons/md';
import { PiSealWarningFill } from 'react-icons/pi';
import { toast } from '../hooks/use-toast';
import { Button } from '../ui/button';
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogTitle,
   DialogTrigger,
} from '../ui/dialog';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { RegistrationForm } from './registration-form';
import { useUser } from './userContext';

interface FormData {
   email: string;
   password: string;
}

export const LoginForm = (props: {
   open?: boolean;
   setOpen?: (open: boolean) => void;
   close?: () => void;
}) => {
   const [isRegOpen, setIsRegOpen] = useState(false);
   const [isLogOpen, setIsLogOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const { open, setOpen } = props;

   const { user } = useUser();

   // Sincronizar con la prop
   useEffect(() => {
      if (open !== undefined) setIsLogOpen(open);
   }, [open]);

   const { login } = useUser();

   const form = useForm<FormData>({
      resolver: zodResolver(loginFormSchema),
      mode: 'onBlur',
   });

   const resetForm = () => {
      form.reset({
         email: '',
         password: '',
      });
   };

   const closeReg = () => {
      setIsRegOpen(false);
      setIsLogOpen(true);
   };

   const onSubmit = form.handleSubmit(async (data) => {
      setLoading(true);

      const res = await fetch('/api/auth/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            email: data.email,
            password: data.password,
         }),
      });

      const resData = await res.json();
      const user = resData.user;

      if (resData.status === 404) {
         setLoading(false);
         setIsRegOpen(true);
         setIsLogOpen(false);
         resetForm();
         await toast({
            variant: 'destructive',
            title: resData.error,
            icon: <MdDangerous className="text-red-800" />,
            description: resData.message,
         });
      }

      if (resData.status === 401) {
         setLoading(false);
         await toast({
            variant: 'warning',
            title: resData.error,
            icon: <PiSealWarningFill className="text-yellow-800" />,
            description: resData.message,
         });
      }

      if (resData.status === 200) {
         login(user);
         setLoading(false);
         resetForm();
         setIsLogOpen(false);
      }
   });

   return (
      <>
         <Dialog open={isLogOpen}>
            {props.open === false && !user ? (
               <DialogTrigger
                  className="self-left px-8 text-red-800 hover:scale-110 hover:text-red-900 transition ease-linear duration-100"
                  onClick={() => setIsLogOpen(true)}
               >
                  <IoEnterSharp size={36} />
               </DialogTrigger>
            ) : null}
            <DialogContent className="bg-red-50 text-red-800 border-red-800 rounded-3xl lg:w-3/12 md:w-6/12 sm:w-8/12 mobile:w-10/12 mobilesm:w-11/12">
               <DialogTitle className="flex flex-col items-center justify-center text-start">
                  <img
                     src="/LogoMono.png"
                     alt="Logo"
                     className="flex w-24 p-2"
                  />
                  <h1 className="text-red-800 font-bold text-lg leading-none">
                     Inicio de sesión
                  </h1>
               </DialogTitle>
               <DialogDescription className="text-red-800 italic font-light text-[12px] text-center leading-none">
                  Accede a tu cuenta
               </DialogDescription>
               <Form {...form}>
                  <form
                     onSubmit={onSubmit}
                     className="flex flex-col gap-3 w-full"
                  >
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="text-red-800 font-semibold">
                                 Correo electrónico
                              </FormLabel>
                              <FormControl className="border-red-800 w-full focus:bg-red-800/25 text-gray-800 font-medium rounded-xl">
                                 <Input
                                    placeholder="john.doe123@gmail.com..."
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
                              <FormControl className="border-red-800 focus:bg-red-800/25 text-gray-800 font-medium rounded-xl">
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

                     <Link href="/auth/forgot-password">
                        <p className="flex text-red-800 font-medium text-[12px] hover:underline">
                           ¿Olvidaste tu contraseña?
                        </p>
                     </Link>

                     <Button
                        type="submit"
                        className="border border-red-800 text-red-800 font-semibold rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-linear duration-100"
                     >
                        {loading ? (
                           <LuLoader2 className="mr-2 animate-spin" />
                        ) : (
                           <IoEnterSharp className="mr-2" />
                        )}{' '}
                        Iniciar sesión
                     </Button>
                  </form>
               </Form>
               <Button
                  onClick={() => {
                     setIsRegOpen(true);
                     setIsLogOpen(false);
                  }}
                  className="w-full items-center text-red-800 text-[12px]"
               >
                  Ya tienes cuenta? Regístrate
               </Button>
               <DialogClose
                  className="text-red-800/50 font-semibold text-3xl absolute  z-50 top-3 right-3 hover:text-red-800 transition ease-linear duration-100"
                  onClick={() => {
                     setIsLogOpen(false);
                     if (setOpen) setOpen(false);
                  }}
               >
                  <X />
               </DialogClose>
            </DialogContent>
         </Dialog>
         <RegistrationForm isOpen={isRegOpen} closeReg={closeReg} />
      </>
   );
};
