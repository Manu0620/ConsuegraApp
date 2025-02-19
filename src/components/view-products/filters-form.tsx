import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/hooks/use-toast';
import { z } from 'zod';
import { ControllerRenderProps, useForm, UseFormReturn } from 'react-hook-form';

import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';

import { Slider } from '@/components/ui/slider';
import { currencyFormat } from '@/lib/utils';

import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import { TbFilterCheck } from 'react-icons/tb';
import { zodResolver } from '@hookform/resolvers/zod';
import { filtersFormSchema } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FiltersFormProps {
   form: UseFormReturn<FormData>;
   filterProducts: () => void;
}

interface FormData {
   search: string;
   class: string;
   desde: number;
   hasta: number;
}

export const FiltersForm = ({ form, filterProducts }: FiltersFormProps) => {
   const [productClasses, setProductClasses] = useState<string[]>([]);
   const [selectedClass, setSelectedClass] = useState('');

   useEffect(() => {
      const fetchClasses = async () => {
         try {
            const response = await fetch('/api/products/classes');
            const classes = await response.json();
            setProductClasses(classes);
         } catch (error) {
            console.error('Error fetching product classes:', error);
         }
      };

      fetchClasses();
   }, []);

   const classChange = (value: string) => {
      setSelectedClass(value.trim());
      form.setValue('class', value);
      filterProducts();
   };

   return (
      <Form {...form}>
         <form className="flex flex-row flex-wrap gap-3 items-end justify-center w-full">
            <FormField
               control={form.control}
               name="search"
               render={({ field }) => (
                  <FormItem className="w-2/4">
                     <FormLabel className="text-red-800 font-semibold">
                        Buscar
                     </FormLabel>
                     <FormControl
                        onChange={filterProducts}
                        className="border-red-800 focus:bg-red-700/25 text-red-800 font-medium rounded-xl"
                     >
                        <Input
                           placeholder="Digite el id #, nombre, descripción... de algún articulo."
                           {...field}
                        />
                     </FormControl>
                     <FormMessage className="text-red-800" />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="class"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-red-800 font-semibold">
                        Por clase
                     </FormLabel>
                     <Select
                        onValueChange={(value) => classChange(value)}
                        value={selectedClass}
                        defaultValue={selectedClass}
                     >
                        <SelectTrigger className="border-red-800 hover:bg-red-700/25 text-red-800 font-medium rounded-xl">
                           <SelectValue placeholder="Clases" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl drop-shadow-sm p-3 border border-red-800 text-red-800 bg-gray-50">
                           <SelectGroup>
                              <SelectLabel>Clases</SelectLabel>
                              {productClasses.map((productClass) => (
                                 <SelectItem
                                    key={productClass}
                                    value={productClass}
                                 >
                                    {productClass}
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
               name="desde"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-red-800 font-semibold">
                        Por precio (RD$)
                     </FormLabel>
                     <FormControl
                        onChange={filterProducts}
                        className="relative border-red-800 focus:bg-red-700/25 text-red-800 font-medium rounded-xl"
                     >
                        <Input
                           type="number"
                           placeholder="Desde..."
                           {...field}
                        />
                     </FormControl>
                     <FormMessage className="text-red-800" />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="hasta"
               render={({ field }) => (
                  <FormItem>
                     <FormControl
                        onChange={filterProducts}
                        className="border-red-800 focus:bg-red-700/25 text-red-800 font-medium rounded-xl"
                     >
                        <Input
                           type="number"
                           placeholder="Hasta..."
                           {...field}
                        />
                     </FormControl>
                  </FormItem>
               )}
            />

            {/* <Button 
                    type="submit"
                    className="border border-red-800 text-red-800 font-semibold rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-in-out duration-200">
                        <TbFilterCheck />  Aplicar filtros
                </Button> */}
         </form>
      </Form>
   );
};
