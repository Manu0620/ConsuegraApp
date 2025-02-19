export interface Customer {
   customer_id: string; // UUID en string
   name: string; // Nombre del cliente
   email: string; // Correo electrónico
   phone?: string | null; // Teléfono (opcional o nulo)
   address?: string | null; // Dirección (opcional o nulo)
   created_at: Date; // Fecha de creación
   status: boolean; // Estado (activo/inactivo)
}
