import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useForm, UseFormReturn } from "react-hook-form";

// Define el tipo FormData según los campos del formulario
interface FormData {
    names: string;
    lastnames: string;
    phone: string;
    email: string;
    address1: string;
    address2?: string; // Campo opcional
    advice?: string; // Campo opcional
}

interface CustomerInfoFormProps {
    form: UseFormReturn<FormData>
    onSubmit: () => void
}

export const CustomerInfoForm = (props: CustomerInfoFormProps) => {

    const { form, onSubmit } = props;

    return(
        <>
            <Form {...form}>
                <form onSubmit={onSubmit} className="customer-info flex flex-col gap-5 text-start ">
                    <div className="flex flex-row w-full gap-5">
                        <FormField
                            control={form.control}
                            name="names"
                            render={({ field }) => (
                                
                                <FormItem className="basis-1/2">
                                    <FormLabel className="text-red-800 font-semibold">Nombres</FormLabel>
                                    <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                        <Input placeholder="Introduzca su nombre..." {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-800 text-[12px]"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastnames"
                            render={({ field }) => (
                                <FormItem className="basis-1/2">
                                    <FormLabel className="text-red-800 font-semibold">Apellidos</FormLabel>
                                    <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                        <Input placeholder="Introduzca su apellido..." {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-800 text-[12px] leading-none"/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-red-800 font-semibold">Numero de teléfono</FormLabel>
                                <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                    <Input placeholder="Introduzca su numero telefónico..." {...field} />
                                </FormControl>
                                <FormMessage className="text-red-800 text-[12px] leading-none "/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-red-800 font-semibold">Correo Electrónico</FormLabel>
                                <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                    <Input placeholder="Introduzca su correo electrónico..." {...field} />
                                </FormControl>
                                <FormMessage className="text-red-800 text-[12px] leading-none "/>
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-row w-full gap-5 items-center">
                        <FormField
                            control={form.control}
                            name="address1"
                            render={({ field }) => (
                                <FormItem className="basis-1/2">
                                    <FormLabel className="text-red-800 font-semibold">Dirección</FormLabel>
                                    <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                        <Input placeholder="Numero de casa, nombre de calle..." {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-800 text-[12px] leading-none "/>
                                </FormItem >
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address2"
                            render={({ field }) => (
                                <FormItem className="basis-1/2">
                                    <FormLabel className="text-red-800 font-semibold"> </FormLabel>
                                    <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                        <Input placeholder="Apartamento, unidad, etc..." {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-800 text-[12px] leading-none "/>
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
            </Form>

        </>
    )
}