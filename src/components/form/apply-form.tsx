'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Textarea } from "../ui/textarea";
import { applyFormSchema } from "@/lib/utils";
import { ApplyMail } from "../email/apply-mail";
import { render } from "@react-email/components";
import { undefined } from "zod";
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";

export function ApplyForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(applyFormSchema),
    mode: 'onBlur',
  });

  const { toast } = useToast();

  const formReset = async () => {
    await form.reset({
      names: '',
      phones: '',
      email: '',
      jobs: undefined,
      message: '',
    });
  }

  const onSubmit = form.handleSubmit(async (data) => {

    console.log(data);

    const emailHtml = await render(
      <ApplyMail 
        names={data.names} 
        phones={data.phones} 
        email={data.email} 
        jobs={data.jobs} 
        message={data.message} />, {
          pretty: true
        }
    );

    setLoading(true);
    const res = await fetch('/api/apply/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        names: data.names,
        phones: data.phones,
        email: data.email,
        jobs: data.jobs,
        message: data.message,
        cv: data.cv,
        html: emailHtml,
      })
    })

    if (res.ok) {
      setLoading(false);
      formReset();
      toast({
        title: "Éxito !",
        description: (
          <p>
            Tu aplicación ha sido enviada con éxito. <br />
            Nos pondremos en contacto contigo lo antes posible.
          </p>
        ),
      });
    } else {
      setLoading(false);
      toast({
        title: "Error !",
        description: (
          <p>
            Algo salio mal. <br />
            Por favor, intenta de nuevo.
          </p>
        ),
        variant: "destructive",
      });
    }
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
              <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                <Input onChange={field.onChange} placeholder="" />
              </FormControl>
              <FormMessage className="text-red-800" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phones"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-red-800 font-bold">Teléfono/Celular</FormLabel>
              <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                <Input placeholder="" onChange={field.onChange} />
              </FormControl>
              <FormMessage className="text-red-800" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-red-800 font-bold">Correo</FormLabel>
              <FormControl className="border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl">
                <Input placeholder="" onChange={field.onChange} />
              </FormControl>
              <FormMessage className="text-red-800" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-red-800 font-bold">Mensaje</FormLabel>
              <FormControl className="border-red-800 text-red-800 hover:bg-white/25 font-medium rounded-xl">
                <Textarea
                  placeholder="Esperamos tu mensaje..."
                  className="resize-none"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage className="text-white" />
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
                    <SelectTrigger className="border-red-800 hover:bg-red-800/25 text-red-800 font-medium rounded-xl">
                      <SelectValue placeholder="Puesto al que aplica" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl text-red-800 bg-white">
                      <SelectGroup>
                        <SelectLabel>Administración</SelectLabel>
                        <SelectItem value="Créditos y Cobros">Créditos y Cobros</SelectItem>
                        <SelectItem value="Compras">Compras</SelectItem>
                        <SelectItem value="Finanzas">Finanzas</SelectItem>
                        <SelectItem value="Tecnología">Tecnología</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Talleres</SelectLabel>
                        <SelectItem value="Produccion">Producción</SelectItem>
                        <SelectItem value="PVC">PVC</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Logística</SelectLabel>
                        <SelectItem value="Almacen">Almacén</SelectItem>
                        <SelectItem value="Chofer">Chofer</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-800" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cv"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-red-800 font-bold">Adjuntar CV</Label>
                  <FormControl className="border-white text-white hover:bg-white/25 font-medium rounded-xl">
                    <Input
                      type="file"
                      accept=".pdf"
                      required
                      className="grow border-red-800 focus:bg-red-800/25 text-red-800 font-medium rounded-xl"
                      onChange={field.onChange} />
                  </FormControl>
                  <FormMessage className="text-red-700" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="text-red-800 bg-red-700/25 border border-red-800 font-bold rounded-xl hover:bg-red-800 hover:text-white hover:scale-105 transition ease-in-out duration-100">
          {loading ? <LuLoader2 className="animate-spin mr-2" /> : <IoIosSend className='mr-2' />}
          Enviar
        </Button>
      </form>
    </Form>
  )
}


