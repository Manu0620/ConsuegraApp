import { cn } from "@/lib/utils";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

interface WhatsAppButtonProps {
    phone: string;
    message: string;
    className?: string;
}

export const WhatsAppButton = (props: WhatsAppButtonProps) => {
    const { phone, message, className } = props;

    return (
        <Link
            href={`https://wa.me/${phone}?text=${message}`} 
            target="_blank" 
            className={cn(
                "flex items-center w-20 h-20 justify-center drop-shadow-lg gap-2 p-2 text-xl rounded-full bg-gradient-to-tr from-green-500 to-green-400 hover:bg-gradient-to-br  text-black transition-colors duration-200",
                className
            )}>
            <BsWhatsapp
                size={32}
            />
        </Link>
    );
}