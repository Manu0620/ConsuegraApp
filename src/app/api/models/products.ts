export interface Products {
   id: string;
   description: string | null;
   class: string;
   brand: string | null;
   inventory: number;
   image?: string;
   status?: boolean;
   price: number;
   minimumPrice: number;
}
