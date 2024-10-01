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

//Filters Form Schema
export const filtersFormSchema = z.object({
  search: z.string().optional(),
  byCategory: z.string().optional(),
  desde: z.string().optional().refine(
    (value) => value === undefined || !isNaN(Number(value)) && Number(value) >= 0,
    { message: "El precio debe ser un número mayor o igual a 0" }
  ),
  hasta: z.string().optional().refine(
    (value) => value === undefined || !isNaN(Number(value)) && Number(value) >= 0,
    { message: "El precio debe ser un número mayor o igual a 0" }
  )
}).superRefine((data, context) => {
  if (data.desde && data.hasta && Number(data.hasta) < Number(data.desde)) {
    context.addIssue({
      code: "custom", // Añadimos el código necesario
      path: ['hasta'],
      message: "El precio 'hasta' debe ser mayor o igual al precio 'desde'",
    });
  }
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
  return "RD$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
