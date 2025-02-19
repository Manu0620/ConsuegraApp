import { DialogTitle } from '@radix-ui/react-dialog';
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
} from '../ui/dialog';
import { IoClose } from 'react-icons/io5';
import { BsFillSendCheckFill } from 'react-icons/bs';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { toast } from '../hooks/use-toast';
import { useState } from 'react';
import { TiArrowForward } from 'react-icons/ti';
import { LuLoader2 } from 'react-icons/lu';
import { PiSealWarningFill } from 'react-icons/pi';
import { MdDangerous } from 'react-icons/md';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useUser } from './userContext';

interface Props {
   open: boolean;
   closeDiag: () => void;
}

interface FormData {
   code: string;
}

export const UserVerification = ({ open, closeDiag }: Props) => {
   const [loading, setLoading] = useState(false);
   const [resending, setResending] = useState(false);

   const { user, sendMail } = useUser();

   const form = useForm<FormData>({
      mode: 'onBlur',
   });

   const resetForm = () => {
      form.reset({
         code: '',
      });
   };

   // Submit form
   const onSubmit = form.handleSubmit(async (data) => {
      setLoading(true);
      const res = await fetch(`/api/auth/verify?code=${data.code}`);

      const resData = await res.json();

      const { code, error, message, status } = resData;

      if (status === 401) {
         setLoading(false);
         resetForm();
         toast({
            variant: 'destructive',
            title: error,
            icon: <MdDangerous className="text-red-800" />,
            description: message,
         });
      }

      if (status === 200) {
         if (user) {
            user.isVerified = true;
         }
         setLoading(false);
         resetForm();
         toast({
            variant: 'success',
            title: message,
            icon: <IoMdCheckmarkCircleOutline className="text-green-800" />,
            description: 'Verificación exitosa!',
         });
         closeDiag();
      }

      if (status === 400 || status === 403) {
         if (user !== null) {
            const isSent = await sendMail(user.name, user.email, code);
            if (isSent) {
               setLoading(false);
               resetForm();
               toast({
                  variant: 'warning',
                  title: error,
                  icon: <PiSealWarningFill className="text-yellow-800" />,
                  description: message,
               });
            }
         }
      }
   });

   // Resend code
   const resendCode = async () => {
      if (user === null) return;

      setResending(true);

      const res = await fetch(`/api/auth/verify`);
      const { code, error, message, status } = await res.json();

      // Si el código ya existe y no está vencido
      if (status === 400 || status === 403) {
         setResending(false);
         const isSent = await sendMail(user.name, user.email, code);
         if (isSent) {
            toast({
               variant: 'warning',
               title: error,
               icon: <PiSealWarningFill className="text-yellow-800" />,
               description: message, // Muestra el mensaje de que el código ya fue enviado
            });
         }
         return;
      }

      setResending(false);
      toast({
         variant: 'destructive',
         title: 'Error al reenviar código',
         description: error,
      });
   };

   return (
      <>
         <Dialog open={open}>
            <DialogContent className="bg-red-50 text-red-800 border-red-800 rounded-3xl lg:w-3/12 md:w-6/12 sm:w-8/12 mobile:w-10/12 mobilesm:w-11/12">
               <DialogTitle className="flex flex-col gap-3 p-3 border-b text-red-800 text-lg font-bold items-center justify-center">
                  <BsFillSendCheckFill
                     className="animate-in drop-shadow-lg"
                     size={36}
                  />
                  Verificación de usuario
               </DialogTitle>
               <DialogDescription>
                  <Form {...form}>
                     <form
                        onSubmit={onSubmit}
                        className="flex flex-col gap-3 w-full"
                     >
                        <FormField
                           control={form.control}
                           name="code"
                           render={({ field }) => (
                              <FormItem className="basis-1/2">
                                 <FormLabel className="text-red-800 font-semibold">
                                    Código
                                 </FormLabel>
                                 <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                    <Input
                                       placeholder="Digite el código enviado..."
                                       {...field}
                                    />
                                 </FormControl>
                                 <FormMessage className="text-red-800 text-[12px]" />
                              </FormItem>
                           )}
                        />
                        <div className="flex flex-row gap-3">
                           <Button
                              type="button"
                              className="flex items-center justify-center text-red-800 text-center w-full px-4 py-2 font-bold text-sm border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-linear duration-100 outline-none"
                              onClick={resendCode}
                           >
                              {resending ? (
                                 <LuLoader2 className="mr-2 animate-spin" />
                              ) : (
                                 <TiArrowForward className="mr-2" />
                              )}{' '}
                              Reenviar código
                           </Button>
                           <Button
                              type="submit"
                              className="flex items-center justify-center text-red-800 text-center w-full px-4 py-2 font-bold text-sm border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-linear duration-100 outline-none"
                           >
                              {loading ? (
                                 <LuLoader2 className="mr-2 animate-spin" />
                              ) : (
                                 <IoMdCheckmarkCircleOutline className="mr-2" />
                              )}{' '}
                              Verificar
                           </Button>
                        </div>
                        <p className="text-gray-700 text-[12px] font-normal text-start">
                           Si no recibiste el código, por favor revisa tu
                           bandeja de spam o correos no deseados
                        </p>
                     </form>
                  </Form>
               </DialogDescription>
               <DialogClose
                  className="text-red-800/75 font-semibold text-2xl absolute z-50 top-3 right-3 hover:text-red-800 transition ease-linear duration-100"
                  onClick={closeDiag}
               >
                  <IoClose />
               </DialogClose>
               <img
                  src="/LogoMono.png"
                  alt="Logo"
                  className="absolute drop-shadow-lg right-3 bottom-3 w-8 "
               />
            </DialogContent>
         </Dialog>
      </>
   );
};
