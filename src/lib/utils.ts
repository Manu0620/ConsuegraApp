import { File } from 'buffer';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export const formatPhoneNumber = (phone: string) => {
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
   names: z
      .string({
         required_error: 'El nombre es requerido',
         invalid_type_error: 'El nombre debe ser un texto',
      })
      .min(8, {
         message: 'El nombre debe tener al menos 8 caracteres',
      }),
   phones: z
      .string({
         required_error: 'El teléfono es requerido',
      })
      .min(10, {
         message: 'El teléfono debe tener al menos 10 dígitos',
      })
      .regex(/^(809|829|849)\d{7}$/, {
         message:
            'El número de teléfono debe ser válido en República Dominicana',
      })
      .transform(formatPhoneNumber), // Aplicamos la transformación
   email: z
      .string({
         required_error: 'El correo es requerido',
      })
      .email({
         message: 'El correo no es válido',
      }),
   reason: z.string({
      required_error: 'El motivo es requerido',
   }),
   message: z
      .string({
         required_error: 'El mensaje es requerido',
      })
      .min(20, {
         message: 'El mensaje debe tener al menos 20 caracteres',
      }),
});

export const applyFormSchema = z.object({
   names: z
      .string({
         required_error: 'El nombre es requerido',
         invalid_type_error: 'El nombre debe ser un texto',
      })
      .min(8, {
         message: 'El nombre debe tener al menos 8 caracteres',
      }),
   phones: z
      .string({
         required_error: 'El teléfono es requerido',
      })
      .min(10, {
         message: 'El teléfono debe tener al menos 10 dígitos',
      })
      .regex(/^(809|829|849)\d{7}$/, {
         message:
            'El número de teléfono debe ser válido en República Dominicana',
      })
      .transform(formatPhoneNumber), // Aplicamos la transformación
   email: z
      .string({
         required_error: 'El correo es requerido',
      })
      .email({
         message: 'El correo no es válido',
      }),
   jobs: z.string({
      required_error: 'El motivo es requerido',
   }),
   message: z
      .string({
         required_error: 'El mensaje es requerido',
      })
      .min(20, {
         message: 'El mensaje debe tener al menos 20 caracteres',
      }),
});

export const customerFormSchema = z.object({
   names: z
      .string({
         message: 'El nombre es requerido',
      })
      .min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
   lastnames: z
      .string({ message: 'El apellido es requerido' })
      .min(3, { message: 'El apellido debe tener al menos 3 caracteres' }),
   email: z.string({ message: 'El correo es requerido' }).email(),
   phone: z
      .string({ message: 'El teléfono es requerido' })
      .min(10, {
         message: 'El teléfono debe tener al menos 10 dígitos',
      })
      .regex(/^\(?(809|829|849)\)?\s?\d{3}-?\d{4}$/, {
         message:
            'El número de teléfono debe ser válido en República Dominicana',
      })
      .transform(formatPhoneNumber)
      .optional(), // Aplicamos la transformación
});

export const AddressSchema = z.object({
   name: z.string().min(1, { message: 'El nombre es obligatorio.' }),
   address_line_1: z
      .string()
      .min(1, { message: 'La dirección principal es obligatoria.' }),
   address_line_2: z.string().optional(),
   city: z.string().min(1, { message: 'La ciudad es obligatoria.' }),
   state: z.string().min(1, { message: 'El estado/provincia es obligatorio.' }),
   postalCode: z
      .string()
      .min(1, { message: 'El código postal es obligatorio.' }),
   country: z.string().min(1, { message: 'El país es obligatorio.' }),
   advice: z.string().optional(),
   createdAt: z.date().optional(), // Se puede omitir porque se genera automáticamente
});

//Checkout Form Schema
export const verificationFormSchema = z.object({
   email: z.string({ message: 'El correo es requerido' }).email(),
});

//Filters Form Schema
export const filtersFormSchema = z
   .object({
      search: z.string().optional(),
      byCategory: z.string().optional(),
      desde: z.string().optional(),
      hasta: z.string().optional(),
   })
   .refine(
      (data) =>
         data.desde !== undefined && data.hasta !== undefined
            ? data.desde <= data.hasta
            : true,
      {
         message: "El valor de 'desde' no puede ser mayor que 'hasta'",
         path: ['hasta'], // Añadir error en el campo "hasta"
      },
   )
   .superRefine((data, context) => {
      if (data.desde && data.hasta && Number(data.hasta) < Number(data.desde)) {
         context.addIssue({
            code: 'custom', // Añadimos el código necesario
            path: ['hasta'],
            message:
               "El precio 'hasta' debe ser mayor o igual al precio 'desde'",
         });
      }
   });

//Login Form Schema
export const loginFormSchema = z.object({
   email: z
      .string({ message: 'El correo es requerido' })
      .email({ message: 'El correo no es válido' }),
   password: z
      .string({ message: 'La contraseña es requerida' })
      .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
});

//Registration Form Schema
export const registrationFormSchema = z
   .object({
      name: z
         .string({ message: 'El nombre es requerido' })
         .min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
      email: z
         .string({ message: 'El correo es requerido' })
         .email({ message: 'El correo no es válido' }),
      password: z
         .string({ message: 'La contraseña es requerida' })
         .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
      confirmPassword: z
         .string({ message: 'La confirmación de contraseña es requerida' })
         .min(8, {
            message:
               'La confirmación de contraseña debe tener al menos 8 caracteres',
         }),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: 'Las contraseñas no coinciden',
      path: ['confirmPassword'],
   });

//Convertidor de texto a formato de moneda en pesos dominicanos
export function currencyFormat(num: number) {
   return 'RD$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
