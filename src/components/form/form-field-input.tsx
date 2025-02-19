import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';

interface InputProps {
   label?: string;
   type?: string;
   placeholder: string;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   value?: string;
   name: string;
}

export const FormFieldInput = (props: InputProps) => {
   return (
      <>
         <span className="flex flex-col w-full">
            <label className="px-4 py-2 w-full text-red-800">
               {props.label}
            </label>
            <input
               type={props.type}
               onChange={props.onChange}
               className="block outline-none mx-2 p-4 text-[14px] text-red-800 border border-b-red-800 border-r-red-800 rounded-[15px] bg-gray-100"
               placeholder={props.placeholder}
               value={props.value}
               name={props.name}
               required
            />
         </span>
      </>
   );
};
