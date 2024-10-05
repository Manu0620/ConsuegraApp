"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { contactFormSchema } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/hooks/use-toast"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IoIosSend } from "react-icons/io"
import { Textarea } from "../ui/textarea";
import { useState } from "react"

const formSchema = contactFormSchema;

export function ContactForm() {
    const form = useForm({
      resolver: zodResolver(formSchema),
    })

    const { toast } = useToast()

    const onSubmit = form.handleSubmit((data) => {
      console.log(data)

      toast({
        title: "Éxito !",
        description: (
            <p>
                Tu mensaje ha sido enviada con éxito. <br />
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
                <FormLabel className="text-white font-bold">Nombre completo</FormLabel>
                <FormControl className="border-white focus:bg-white/25 text-white font-medium rounded-xl">
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage className="text-white"/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phones"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-bold">Telefono/Celular</FormLabel>
                <FormControl className="border-white focus:bg-white/25 text-white font-medium rounded-xl">
                  <Input placeholder="" {...field} />
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
                <FormLabel className="text-white font-bold">Correo</FormLabel>
                <FormControl className="border-white focus:bg-white/25 text-white font-medium rounded-xl">
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage className="text-white"/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-bold" >Porque nos contacta</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[280px] border-white hover:bg-red-700/25 text-white font-medium rounded-xl">
                    <SelectValue placeholder="Seleccione una razon.." />
                  </SelectTrigger>
                  <SelectContent  className="rounded-xl text-red-700 bg-white">
                    <SelectGroup>
                        <SelectLabel>Razones</SelectLabel>
                        <SelectItem value="cotizacion">Cotizacion</SelectItem>
                        <SelectItem value="articulo">Sobre un articulo</SelectItem>
                        <SelectItem value="sugerencia">Sugerencia</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-white font-bold" >Mensaje</FormLabel>
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
              className="text-red-700 bg-white/75 self-end font-bold rounded-xl hover:bg-white hover:text-red-700 hover:scale-105 transition ease-in-out duration-200">
                <IoIosSend /> Enviar
            </Button>
        </form>
      </Form>
    )
  }
