import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { GrSend } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const CheckoutForm = () => {

    return(
        <Dialog>
            <DialogTrigger className="w-full">
                <Button className="text-red-800 w-full font-bold text-sm border border-red-800 rounded-xl hover:bg-red-800/75 hover:text-white hover:scale-105 transition ease-in-out duration-200 outline-none flex items-center">
                    <GrSend className="mr-2" /> Enviar cotización
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-red-50 text-red-800 border-2 border-red-800 w-1/2 rounded-3xl ">
                <DialogHeader>
                    <DialogTitle 
                        className="flex flex-row gap-2 border-b border-red-800 p-8">
                        <GrSend /> Enviar cotización
                    </DialogTitle>
                    <DialogDescription className="flex flex-col py-10 px-4 items-center justify-center">
                        
                    </DialogDescription>
                </DialogHeader>

            </DialogContent>
        </Dialog>
    );
}