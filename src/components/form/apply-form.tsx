"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const ContactFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    message: z.string(),
})

import { useToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoIosSend } from "react-icons/io";

const formSchema = z.object({
  names: z.string().min(8, 
    { message: "El nombre debe tener al menos 8 caracteres" }
  ),
  phones: z.string().min(10,
    { message: "El telefono debe tener al menos 10 caracteres" }
  ),
  email: z.string().email(),
  jobs: z.string(),
})

export function ApplyForm() {
    const form = useForm({
      resolver: zodResolver(formSchema),
    })

    const { toast } = useToast()

    const onSubmit = form.handleSubmit((data) => {
      console.log(data)
      
      toast({
        title: "Exito !",
        description: (
            <p>
                Tu aplicacion ha sido enviada con exito. <br />
                Nos pondremos en contacto contigo lo antes posible.
            </p>
        ),
      })
  })

    return (
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-3">
          <FormField
            control={form.control}
            name="names"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-red-800 font-bold">Nombre completo</FormLabel>
                <FormControl className="border-red-700 focus:bg-red-700/25 text-red-800 font-medium rounded-xl">
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage className="text-red-700"/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phones"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-red-800 font-bold">Telefono/Celular</FormLabel>
                <FormControl className="border-red-700 focus:bg-red-700/25 text-red-800 font-medium rounded-xl">
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage className="text-red-700"/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-red-800 font-bold">Correo</FormLabel>
                <FormControl className="border-red-700 focus:bg-red-700/25 text-red-800 font-medium rounded-xl">
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage className="text-red-700"/>
              </FormItem>
            )}
          />
          
          <div className="flex flex-row w-full h-fit items-center ">
            <div className="flex flex-row space-x-2 grow">
              <FormField
                control={form.control}
                name="jobs"
                render={({ field }) => (
                  <FormItem>
                      <FormLabel className="text-red-800 font-bold" >Puesto</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="border-red-700 hover:bg-red-700/25 text-red-800 font-medium rounded-xl">
                          <SelectValue placeholder="Puesto al que aplica" />
                        </SelectTrigger>
                        <SelectContent  className="rounded-xl text-red-800 bg-white">
                          <SelectGroup>
                            <SelectLabel>Administracion</SelectLabel>
                            <SelectItem value="creditos">Creditos y Cobros</SelectItem>
                            <SelectItem value="compras">Compras</SelectItem>
                            <SelectItem value="finanzas">Finanzas</SelectItem>
                            <SelectItem value="tecnologia">Tecnologia</SelectItem>    
                          </SelectGroup>
                          <SelectGroup>
                            <SelectLabel>Talleres</SelectLabel>
                            <SelectItem value="produccion">Produccion</SelectItem>
                            <SelectItem value="pvc">PVC</SelectItem>
                          </SelectGroup>
                          <SelectGroup>
                            <SelectLabel>Logistica</SelectLabel>
                            <SelectItem value="almacen">Almacen</SelectItem>
                            <SelectItem value="chofer">Chofer</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cv"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-red-800 font-bold">Adjuntar CV</Label>
                      <Input type="file" accept=".pdf"  required className="grow border-red-700 focus:bg-red-700/25 text-red-800 font-medium rounded-xl"/>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />
            </div>            
          </div>
          <Button 
              type="submit"
              className="text-red-700 bg-red-700/25 font-bold rounded-xl hover:bg-red-700 hover:text-white hover:scale-110 transition ease-in-out duration-200">
                <IoIosSend /> Aplicar
          </Button>
        </form>
      </Form>
    )
  }


