import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';

import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { useForm, UseFormReturn } from 'react-hook-form';
import { Button } from '@react-email/components';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { DialogFooter } from '../ui/dialog';
import { CheckCircle } from 'lucide-react';
import { LuLoader2 } from 'react-icons/lu';

// Define el tipo FormData según los campos del formulario
interface FormData {
   email: string;
}

interface VerificationFormProps {
   form: UseFormReturn<FormData>;
   onSubmit: () => void;
   loading?: boolean;
}

export const VerificationForm = (props: VerificationFormProps) => {
   const { form, onSubmit, loading } = props;

   return (
      <>
         <Form {...form}>
            <form
               onSubmit={onSubmit}
               className="customer-info flex flex-col gap-5 text-start "
            >
               <div className="flex flex-row w-full gap-5">
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem className="w-full">
                           <FormLabel className="text-red-800 font-semibold">
                              Correo electrónico
                           </FormLabel>
                           <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                              <Input
                                 placeholder="Introduzca su correo electrónico..."
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage className="text-red-800 text-[12px]" />
                        </FormItem>
                     )}
                  />
               </div>
            </form>
         </Form>
      </>
   );
};
