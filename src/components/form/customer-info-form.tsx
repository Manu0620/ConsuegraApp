import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "../ui/input";
import {  UseFormReturn } from "react-hook-form";
import { Button } from "../ui/button";
import { LuLoader2 } from "react-icons/lu";
import { IoIosSend } from "react-icons/io";
import { formatPhoneNumber } from "@/lib/utils";


// Define el tipo FormData según los campos del formulario
interface FormData {
    names: string;
    lastnames: string;
    phone: string;
    email: string;
}

interface CustomerInfoFormProps {
    form: UseFormReturn<FormData>
    onSubmit: () => void
    loading?: boolean
}

export const CustomerInfoForm = (props: CustomerInfoFormProps) => {

    const { form, onSubmit, loading } = props;

    return(
        <>
            <Form {...form}>
                <form onSubmit={onSubmit} className="customer-info flex flex-col gap-5 text-start w-full">
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
                                <FormLabel className="text-red-800 font-semibold">Número de teléfono</FormLabel>
                                <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                                    <Input
                                        placeholder="(123) 456-7890"
                                        {...field} // Esto incluye `value` y `onChange`
                                        onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))} // Formatea solo al cambiar
                                    />
                                </FormControl>
                                <FormMessage className="text-red-800 text-[12px] leading-none" />
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
                    <Button
                        type="submit"
                        className="self-start text-red-800 bg-red-700/25 border border-red-800 font-bold rounded-xl hover:bg-red-800 hover:text-white transition ease-in-out duration-100">
                        {loading ? <LuLoader2 className="animate-spin mr-2" /> : <IoIosSend className='mr-2' />}
                        Enviar
                    </Button>
                </form>
            </Form>
        </>
    )
}