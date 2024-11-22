export interface OrderItems {
   order_item_id: string;
   order_id: string;  // Relación con la tabla de orders
   product_id: string;  // Relación con la tabla de products
   quantity: number;
   unit_price: number;
   total_price: number;  // Calculado como quantity * unit_price
 }