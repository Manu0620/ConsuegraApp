import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';

import { Input } from '../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { Input46 } from './PhoneInput';
import { Button } from '../ui/button';
import { LuLoader2 } from 'react-icons/lu';
import { IoIosSend } from 'react-icons/io';
import { Address, State } from '@prisma/client';
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '../ui/select';
import { useEffect, useState } from 'react';
import { Textarea } from '../ui/textarea';

interface CustomerInfoFormProps {
   form: UseFormReturn<Address>;
   onSubmit: () => void;
   loading?: boolean;
}

export const AddressForm = (props: CustomerInfoFormProps) => {
   const { form, onSubmit, loading } = props;
   const [states, setStates] = useState<State[]>([]);
   const [selectedState, setSelectedState] = useState('');

   useEffect(() => {
      const getStates = async () => {
         const res = await fetch('/api/address/states');
         const data = await res.json();
         const { states } = data;
         setStates(states);
      };

      getStates();
   }, []);

   const stateChange = (value: string) => {
      setSelectedState(value);
   };

   return (
      <>
         <Form {...form}>
            <form
               onSubmit={onSubmit}
               className="customer-info flex flex-col gap-3 text-start w-full h-full"
            >
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem className="basis-1/2">
                        <FormLabel className="text-red-800 font-semibold">
                           Nombre completo
                        </FormLabel>
                        <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                           <Input
                              placeholder="Introduzca su nombre..."
                              {...field}
                           />
                        </FormControl>
                        <FormMessage className="text-red-800 text-[12px]" />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="address_line_1"
                  render={({ field }) => (
                     <FormItem className="basis-1/2">
                        <FormLabel className="text-red-800 font-semibold">
                           Linea de dirección 1 *
                        </FormLabel>
                        <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                           <Input type="address" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-800 text-[12px]" />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="address_line_2"
                  render={({ field }) => (
                     <FormItem className="basis-1/2">
                        <FormLabel className="text-red-800 font-semibold">
                           Linea de dirección 2
                        </FormLabel>
                        <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                           <Input {...field} value={field.value ?? ''} />
                        </FormControl>
                        <FormMessage className="text-red-800 text-[12px]" />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                     <FormItem className="basis-1/2">
                        <FormLabel className="text-red-800 font-semibold">
                           Ciudad
                        </FormLabel>
                        <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                           <Input
                              placeholder="Introduzca su ciudad..."
                              {...field}
                           />
                        </FormControl>
                        <FormMessage className="text-red-800 text-[12px] leading-none" />
                     </FormItem>
                  )}
               />
               <div className="flex flex-row w-full gap-5">
                  <FormField
                     control={form.control}
                     name="state"
                     render={({ field }) => (
                        <FormItem className="basis-1/2">
                           <FormLabel className="text-red-800 font-semibold">
                              Provincia
                           </FormLabel>
                           <Select
                              onValueChange={(value) => field.onChange(value)} // Conecta el onChange del campo
                              value={field.value} // Conecta el valor del campo
                              defaultValue={field.value}
                           >
                              <SelectTrigger className="border-red-800 hover:bg-red-700/25 text-red-800 font-medium rounded-xl">
                                 <SelectValue placeholder="Provincias" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl drop-shadow-sm p-3 border border-red-800 text-red-800 bg-gray-50">
                                 <SelectGroup>
                                    <SelectLabel>Provincias</SelectLabel>
                                    {states.map((state) => (
                                       <SelectItem
                                          key={state.id}
                                          value={state.name}
                                       >
                                          {state.name}
                                       </SelectItem>
                                    ))}
                                 </SelectGroup>
                              </SelectContent>
                           </Select>
                           <FormMessage className="text-red-800" />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="postalCode"
                     render={({ field }) => (
                        <FormItem className="basis-1/2">
                           <FormLabel className="text-red-800 font-semibold">
                              Código postal
                           </FormLabel>
                           <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                              <Input
                                 placeholder="Introduzca su apellido..."
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage className="text-red-800 text-[12px] leading-none" />
                        </FormItem>
                     )}
                  />
               </div>
               <FormField
                  control={form.control}
                  name="advice"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="text-red-800 font-semibold">
                           Instrucciones de entrega
                        </FormLabel>
                        <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                           <Textarea
                              placeholder="Ingrese instrucciones de entrega para esta dirección si la tiene..."
                              className="resize-none"
                              rows={4}
                              {...field}
                              value={field.value ?? ''}
                           />
                        </FormControl>
                        <FormMessage className="text-red-800" />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="country"
                  defaultValue="Republica Dominicana"
                  render={({ field }) => (
                     <FormItem className="basis-1/2">
                        <FormLabel className="text-red-800 font-semibold">
                           Pais
                        </FormLabel>
                        <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                           <Input {...field} disabled={true} />
                        </FormControl>
                        <FormMessage className="text-red-800 text-[12px]" />
                     </FormItem>
                  )}
               />
               <Button
                  type="submit"
                  className="self-start text-red-800 bg-red-700/25 border border-red-800 font-bold rounded-xl hover:bg-red-800 hover:text-white transition ease-in-out duration-100"
               >
                  {loading ? (
                     <LuLoader2 className="animate-spin mr-2" />
                  ) : (
                     <IoIosSend className="mr-2" />
                  )}
                  Agregar dirección
               </Button>
            </form>
         </Form>
      </>
   );
};
