export interface Orders {
   order_id: string;
   customer_id: string; // Relación con la tabla de customer
   created_at: Date;
   total: number;
   status: string;
}
