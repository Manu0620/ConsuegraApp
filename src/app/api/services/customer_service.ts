import prisma from '../lib/prisma'; // Ajusta la ruta según tu estructura
import { Customer } from '@prisma/client'; // Importa el tipo de Prisma

// Servicio para manejar clientes
export const customerService = {
  
   // Verificar si un cliente existe por correo electrónico
  async getCustomerByEmail(email: string): Promise<Customer | null> {
    return await prisma.customer.findUnique({
      where: { email },
    });
  },

   // Crear un nuevo cliente
  async createCustomer(data: Omit<Customer, 'customer_id' | 'created_at'>): Promise<Customer> {
    return await prisma.customer.create({
      data,
    });
  },
};