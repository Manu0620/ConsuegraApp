'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { contactFormSchema } from '@/lib/utils';

import { useToast } from '@/components/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LuLoader2 } from 'react-icons/lu';

import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';

import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { IoIosSend } from 'react-icons/io';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import { set, undefined } from 'zod';
import { render } from '@react-email/components';
import { Mail } from '../email/contact-mail';

const formSchema = contactFormSchema;

export function ContactForm() {
   const [loading, setLoading] = useState(false);

   const form = useForm({
      resolver: zodResolver(formSchema),
      mode: 'onBlur',
   });

   const formReset = async () => {
      await form.reset({
         names: '',
         phones: '',
         email: '',
         reason: undefined,
         message: '',
      });
   };

   const { toast } = useToast();

   const onSubmit = form.handleSubmit(async (data) => {
      const emailHtml = await render(
         <Mail
            names={data.names}
            phones={data.phones}
            email={data.email}
            reason={data.reason}
            message={data.message}
         />,
         {
            pretty: true,
         },
      );

      setLoading(true);
      const res = await fetch(`/api/contact/send-mail`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            ...data,
            html: emailHtml,
         }),
      });

      if (res.ok) {
         setLoading(false);
         formReset();
         toast({
            title: 'Éxito !',
            description: (
               <p>
                  Tu mensaje ha sido enviada con éxito. <br />
                  Nos pondremos en contacto contigo lo antes posible.
               </p>
            ),
         });
      } else {
         setLoading(false);
         toast({
            title: 'Error !',
            variant: 'destructive',
            description: (
               <p>
                  Algo salió mal. <br />
                  Por favor, intenta de nuevo.
               </p>
            ),
         });
      }
   });

   return (
      <Form {...form}>
         <form onSubmit={onSubmit} className="space-y-3">
            <FormField
               control={form.control}
               name="names"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-red-50 font-semibold">
                        Nombre completo
                     </FormLabel>
                     <FormControl className="border-white focus:bg-white/25 text-red-50 font-medium rounded-xl">
                        <Input
                           placeholder="Ingrese su nombre completo..."
                           {...field}
                        />
                     </FormControl>
                     <FormMessage className="text-red-50" />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="phones"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-red-50 font-semibold">
                        Teléfono/Celular
                     </FormLabel>
                     <FormControl className="border-white focus:bg-white/25 text-red-50 font-medium rounded-xl">
                        <Input
                           placeholder="Ingrese su teléfono/celular..."
                           {...field}
                        />
                     </FormControl>
                     <FormMessage className="text-red-50" />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-red-50 font-semibold">
                        Correo
                     </FormLabel>
                     <FormControl className="border-white focus:bg-white/25 text-red-50 font-medium rounded-xl">
                        <Input
                           placeholder="Ingrese su correo electrónico..."
                           {...field}
                        />
                     </FormControl>
                     <FormMessage className="text-red-50" />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="reason"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-red-50 font-semibold">
                        Porque nos contacta
                     </FormLabel>
                     <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                     >
                        <SelectTrigger className="w-4/12 border-white hover:bg-red-800/25 text-red-50 font-medium rounded-xl">
                           <SelectValue placeholder="Seleccione una razón.." />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl text-red-800 bg-red-100">
                           <SelectGroup>
                              <SelectLabel>Razones</SelectLabel>
                              <SelectItem value="Cotización">
                                 Cotización
                              </SelectItem>
                              <SelectItem value="Pregunta sobre un articulo">
                                 Sobre un articulo
                              </SelectItem>
                              <SelectItem value="Sugerencia">
                                 Sugerencia
                              </SelectItem>
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                     <FormMessage className="text-red-50" />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="message"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-red-50 font-semibold">
                        Mensaje
                     </FormLabel>
                     <FormControl className="border-white text-red-50 hover:bg-white/25 font-medium rounded-xl">
                        <Textarea
                           placeholder="Esperamos tu mensaje..."
                           className="resize-none"
                           rows={4}
                           {...field}
                        />
                     </FormControl>
                     <FormMessage className="text-red-50" />
                  </FormItem>
               )}
            />
            <Button
               type="submit"
               className="text-red-800 bg-white self-end px-6 font-bold rounded-xl hover:bg-red-100 hover:scale-105 transition ease-in-out duration-100"
            >
               {loading ? (
                  <LuLoader2 className="animate-spin mr-2" />
               ) : (
                  <IoIosSend className="mr-2" />
               )}
               Enviar
            </Button>
         </form>
      </Form>
   );
}
