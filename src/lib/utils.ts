import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Contact Form Schema
export const contactFormSchema = z.object({
  names: z.string().min(8, 
    { message: "El nombre debe tener al menos 8 caracteres" }
  ),
  phones: z.string().min(10,
    { message: "El telefono debe tener al menos 10 caracteres" }
  ),
  email: z.string().email(),
  reason: z.string(),
  message: z.string().min(20,
    { message: "El mensaje debe tener al menos 20 caracteres" }
  ),
})

//Login Form Schema
export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8,
    { message: "La contraseña debe tener al menos 8 caracteres" }
  ),
})


//Convertidor de texto a formato de moneda en pesos dominicanos
export function currencyFormat(num: number) {
  return "RD$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}