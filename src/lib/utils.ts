import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const formatPhoneNumber = (phone: string) => {
  // Limpiamos el número eliminando espacios, guiones, etc.
  const cleaned = phone.replace(/\D/g, '');

  // Aseguramos que tenga 10 dígitos
  if (cleaned.length === 10) {
    // Aplicamos el formato para República Dominicana
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  }

  // Si no tiene los 10 dígitos, devolvemos el número tal cual para que falle la validación
  return phone;
};

export const contactFormSchema = z.object({
  names: z.string({
    required_error: "El nombre es requerido",
    invalid_type_error: "El nombre debe ser un texto",
  }).min(8, {
    message: "El nombre debe tener al menos 8 caracteres",
  }),
  phones: z.string({
    required_error: "El teléfono es requerido",
  })
    .min(10, {
      message: "El teléfono debe tener al menos 10 dígitos",
    })
    .regex(/^(809|829|849)\d{7}$/, {
      message: "El número de teléfono debe ser válido en República Dominicana",
    })
    .transform(formatPhoneNumber), // Aplicamos la transformación
  email: z.string({
    required_error: "El correo es requerido",
  }).email({
    message: "El correo no es válido",
  }),
  reason: z.string({
    required_error: "El motivo es requerido",
  }),
  message: z.string({
    required_error: "El mensaje es requerido",
  }).min(20, {
    message: "El mensaje debe tener al menos 20 caracteres",
  }),
});


//Checkout Form Schema  
export const checkFormSchema = z.object({
  names: z.string({
    message: "El nombre es requerido"
  }).min(3, 
    { message: "El nombre debe tener al menos 3 caracteres" }
  ),
  lastnames: z.string(
    { message: "El apellido es requerido" }
  ).min(3,  
    { message: "El apellido debe tener al menos 3 caracteres" }
  ),
  address1: z.string(
    { message: "La dirección es requerida" }
  ).min(10,
    { message: "La dirección debe tener al menos 10 caracteres" }
  ),
  address2: z.string().optional(),
  phone: z.string(
    { message: "El teléfono es requerido" }
  ).min(10,
    { message: "El teléfono debe tener al menos 10 caracteres" }
  ),
  email: z.string(
    { message: "El correo es requerido" }
  ).email(),
  advice: z.string(
    { message: "La nota es requerida" }
  ).min(20,
    { message: "La nota debe tener al menos 20 caracteres" }
  ).optional(),
})


//Filters Form Schema
export const filtersFormSchema = z.object({
  search: z.string(
    { message: "La búsqueda es requerida" }
  ).optional(),
  byCategory: z.string(
    { message: "La categoría es requerida" }
  ).optional(),
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
