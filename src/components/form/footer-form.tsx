"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/hooks/use-toast"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { IoIosSend } from "react-icons/io"


const formSchema = z.object({
  names: z.string(
    { message: "El nombre es requerido" }
  ).min(8, 
    { message: "El nombre debe tener al menos 8 caracteres" }
  ),
  email: z.string(
    { message: "El correo es requerido" }
  ).email(
    { message: "El correo no es válido" }
  ),
  message: z.string(
    { message: "El mensaje es requerido" }
  ).min(5,
    { message: "El mensaje debe tener al menos 20 caracteres" }
  ),
})

interface FormData {
  names: string;
  email: string;
  message: string;
}

export function FooterForm() {
    const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      mode: 'onBlur',
    })

    const formReset = async () => {
      await form.reset({
        names: "",
        email: "",
        message: "",
      });
    };

    const onSubmit = form.handleSubmit( async (data) => {
      console.log(data)

      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if(res.ok){
        formReset();
        toast({
          title: "Éxito !",
          description: (
              <p>
                  Tu mensaje ha sido enviado con éxito. <br />
                  Nos pondremos en contacto contigo lo antes posible.
              </p>
          ),
          
        })
      }
    })

    return (
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="flex flex-row space-x-2">
            <FormField
                control={form.control}
                name="names"
                render={({ field }) => (
                <FormItem>
                    <FormControl className="border-white text-white hover:bg-white/25 font-medium rounded-xl">
                      <Input placeholder="Nombre..." {...field} />
                    </FormControl>
                    <FormMessage className="text-white"/>
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormControl className="border-white text-white hover:bg-white/25 font-medium rounded-xl">
                      <Input placeholder="Correo..." {...field} />
                    </FormControl>
                    <FormMessage className="text-white"/>
                </FormItem>
                )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                    <FormControl className="border-white text-white hover:bg-white/25 font-medium rounded-xl">
                        <Textarea
                        placeholder="Esperamos tu mensaje..."
                        className="resize-none"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage className="text-white"/>
                </FormItem>
            )}
            />
            <Button 
                type="submit"
                className="flex border-white text-red-800 items-center justify-center self-center bg-white/75 hover:bg-white hover:scale-105 transition ease-in-out duration-200 focus:outline-none font-bold rounded-xl text-sm px-6 py-2">
                <IoIosSend size={18} className='mr-2'/> Enviar
            </Button>
        </form>
      </Form>
    )
  }
