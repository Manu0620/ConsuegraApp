import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/hooks/use-toast"
import { z } from "zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Slider } from "@/components/ui/slider"
import { currencyFormat } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { TbFilterCheck } from "react-icons/tb";
import { zodResolver } from "@hookform/resolvers/zod"
import { filtersFormSchema } from "@/lib/utils"
import { useEffect, useState } from "react"

export const FiltersForm = () => { 

    const [filters, setFilters] = useState([""]);

    const form = useForm({
        resolver: zodResolver(filtersFormSchema),
        mode: 'onChange',
    })

    const onSubmit = form.handleSubmit((formData) => {
        const { search, byCategory, desde, hasta } = formData;


    })
    
    return (

        <Form {...form}>
            <form onSubmit={onSubmit} className="flex flex-row flex-wrap gap-3 items-end justify-center w-full">
                <FormField
                    control={form.control} 
                    name="search"
                    render={({ field }) => (
                    <FormItem className="w-2/4">
                        <FormLabel className="text-red-800 font-semibold">Buscar</FormLabel>
                        <FormControl className="border-red-800 focus:bg-red-700/25 text-red-800 font-medium rounded-xl">
                            <Input placeholder="Digite el id #, nombre, descripción... de algún articulo." {...field} />
                        </FormControl>
                        <FormMessage className="text-red-800"/>
                    </FormItem>
                    )}
                />  
                <FormField
                    control={form.control}
                    name="byCategory"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-red-800 font-semibold" >Por categoría</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} >
                            <SelectTrigger className="border-red-800 hover:bg-red-700/25 text-red-800 font-medium rounded-xl">
                            <SelectValue placeholder="Categorías" />
                            </SelectTrigger>
                            <SelectContent  className="rounded-xl drop-shadow-sm p-3 border border-red-800 text-red-800 bg-gray-50">
                                <SelectGroup>
                                    <SelectLabel>Categorías</SelectLabel>
                                    <SelectItem value="ferreteria">Ferretería</SelectItem>
                                    <SelectItem value="plomeria">Plomaría</SelectItem>
                                    <SelectItem value="electricidad">Electricidad</SelectItem>
                                    <SelectItem value="construccion">Construcción</SelectItem>  
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FormMessage className="text-red-800" />
                    </FormItem>
                )}/> 
                <FormField
                    control={form.control}
                    name="desde"
                    render={({ field }) => (
                    <FormItem >
                        <FormLabel className="text-red-800 font-semibold">Por precio</FormLabel>
                        <FormControl className="border-red-800 focus:bg-red-700/25 text-red-800 font-medium rounded-xl">
                            <Input type='number' placeholder="Desde..." {...field} />
                        </FormControl>
                        <FormMessage className="text-red-800"/>
                    </FormItem>
                )}/>  
                <FormField
                    control={form.control}
                    name="hasta"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl className="border-red-800 focus:bg-red-700/25 text-red-800 font-medium rounded-xl">
                            <Input type='number' placeholder="Hasta..." {...field} />
                        </FormControl>
                        <FormMessage className="text-red-800"/>
                    </FormItem>
                )}/>

                <Button 
                    type="submit"
                    className="border border-red-800 text-red-800 font-semibold rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-in-out duration-200">
                        <TbFilterCheck />  Aplicar filtros
                </Button>
                <div className="filters flex flex-row ">
                    
                </div>
            </form>
        </Form>
    );
}