"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { Textarea } from "../ui/textarea";

import { checkFormSchema, currencyFormat } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaOpencart } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { IoIosArrowBack, IoIosSend } from "react-icons/io";
import { useCart } from "../cart/cart-context";
import { toast } from "../hooks/use-toast";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { CustomerInfoForm } from "./customer-info-form";

interface FormData {
    names: string;
    lastnames: string;
    phone: string;
    email: string;
    address1: string;
    address2?: string; // Campo opcional
    advice?: string; // Campo opcional
}


export const CheckoutForm = () => {

    const [page, setPage] = useState(1);
    const { cartItems, subtotal, clearCart } = useCart();

    // Luego, usa el tipo en useForm
    const form = useForm<FormData>({
        resolver: zodResolver(checkFormSchema),
        mode: "onBlur",
    });

    const formReset = async () => {
        await form.reset();
        await clearCart();
        
    }

    // Función para cambiar de página solo si el formulario es válido
    const handleNextPage = async () => {
        const isValid = await form.trigger(); // Verifica si los campos son válidos
        if (isValid) {
            setPage(page + 1);
        } else {
            toast({
                variant: "destructive",
                title: "Ups ! Algo salió mal",
                description: "Por favor, complete todos los campos correctamente.",
            })
        }
    };

    const handlePrevPage = () => {
        setPage(page - 1);
    }

    const onSubmit = form.handleSubmit((data: FormData) => {
        console.log(data);

        // Reset form and cart
        formReset();

        //close dialogs 
        setPage(1);

        toast({
            variant: 'success', 
            title: 'Gracias !',
            description: 'Tu cotizacion fue enviada, nos pondremos en contacto contigo.'
        })
    })

    return(
        <>
            <Dialog>
                <DialogTrigger className="flex items-center justify-center text-red-800 text-center w-full px-4 py-2 font-bold text-sm border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-in-out duration-200 outline-none">
                    <GrSend className="mr-2" /> Realizar cotización
                </DialogTrigger>
                <DialogContent className="bg-white text-red-800 border-2 border-red-800 rounded-3xl lg:w-1/2 md:w-8/12 sm:w-11/12 mobile:w-11/12 mobilesm:w-11/12">
                    <DialogHeader className="leading-none border-b-2 border-red-800 p-5">
                        <DialogTitle 
                            className="flex flex-row gap-2 font-semibold">
                            <GrSend /> {page == 1 ? 'Cotización' : 'Confirmación'}
                        </DialogTitle>
                        <DialogDescription 
                            className="w-full font-light">
                            {page == 1 ? 'Por favor, complete el formulario para enviar su cotización.' : 'Por favor, revise su cotización antes de enviarla.'}
                        </DialogDescription>
                    </DialogHeader>
                    {page == 1 ?
                        <CustomerInfoForm form={form} onSubmit={onSubmit} />
                    : page == 2 ?
                        <>
                            <ScrollArea className="h-fit max-h-72">
                                <DialogTitle className="flex flex-row p-3 font-semibold">
                                    <FaOpencart className="mr-2"/> Productos en el carrito
                                </DialogTitle>
                                <Table 
                                    className="border-b border-red-800 font-medium ">
                                    <TableHeader className="font-bold border-b border-t border-red-800">
                                            <TableHead>Nombre</TableHead>
                                            <TableHead>Cantidad</TableHead>
                                            <TableHead className="text-right font-semibold">Precio</TableHead>
                                            <TableHead className="text-right font-semibold">Total</TableHead>
                                    </TableHeader>
                                    <TableBody className="text-gray-800">
                                        {cartItems.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell>{item.quantity}</TableCell>
                                                <TableCell className="text-right">
                                                    {currencyFormat(parseFloat(item.price))}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {currencyFormat(item.quantity * parseFloat(item.price))}
                                                </TableCell>
                                                <TableCell>
                                                    
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter className="font-semibold">
                                        <TableRow>
                                            <TableCell colSpan={2}></TableCell>
                                            <TableCell className="text-right">Subtotal</TableCell>
                                            <TableCell className="text-right">{currencyFormat(subtotal)}</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </ScrollArea>
                            
                            <Form {...form}>
                                <form onSubmit={onSubmit} className="customer-info flex flex-col gap-5 text-start ">
                                    <FormField
                                        control={form.control}
                                        name="advice"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-red-800 font-semibold" >Nota</FormLabel>
                                                <FormControl className="border-red-800 text-red-800 hover:bg-red-800/25 font-medium rounded-xl">
                                                    <Textarea
                                                        placeholder="Esperamos tu nota..."
                                                        className="resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-[12px] text-red-800"/>
                                            </FormItem>
                                        )}/>
                                       
                                        {page == 2 ? (
                                            <DialogFooter className="flex flex-row flex-wrap-reverse gap-2 justify-end leading-none border-red-800">
                                                <Button 
                                                    onClick={handlePrevPage} 
                                                    className="text-red-800 font-semibold text-sm border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white transition ease-in-out duration-200"> 
                                                    <IoIosArrowBack className="mr-2" /> Atrás
                                                </Button>
                                                <Button
                                                    type="submit" 
                                                    className="text-red-800 w-1/4 font-semibold text-sm border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white transition ease-in-out duration-200 ">
                                                    <IoIosSend className="mr-2" /> Enviar
                                                </Button>
                                            </DialogFooter>
                                        ) : null }
                                        
                                </form>
                            </Form>
                        </>
                    : null}

                    {page === 1 && (
                        <DialogFooter className="flex flex-row flex-wrap-reverse gap-2 justify-end leading-none border-red-800">
                            <Button
                            onClick={handleNextPage}
                            className="text-red-800 font-semibold text-sm w-1/4 border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white transition ease-in-out duration-200">
                            Siguiente
                            </Button>
                        </DialogFooter>
                    )}
                    
                </DialogContent>
            </Dialog>
        </>
    );
}