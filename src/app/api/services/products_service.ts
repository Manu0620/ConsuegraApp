import prisma from '../lib/prisma'; // Asegúrate de que la ruta sea correcta

export const ProductService = {
   async getAllProducts(page: number = 1, limit: number = 10) {
      try {
         const offset = (page - 1) * limit; // Calcular el desplazamiento
         const [products, totalProducts] = await prisma.$transaction([
            prisma.product.findMany({
               skip: offset,
               take: limit,
            }),
            prisma.product.count(),
         ]);

         const totalPages = Math.ceil(totalProducts / limit);

         return {
            products,
            pagination: {
               totalProducts,
               totalPages,
               currentPage: page,
               pageSize: limit,
            },
         };
      } catch (error) {
         console.error('Error fetching products:', error);
         throw new Error('Error fetching products');
      }
   },

   async getProductById(id: string) {
      try {
         const product = await prisma.product.findUnique({
            where: {
               id,
            },
         });

         if (!product) {
            throw new Error('Product not found');
         }

         return product;
      } catch (error) {
         console.error('Error fetching product:', error);
         throw new Error('Error fetching product');
      }
   },

   async getFilteredProducts(
      search: string,
      prodClass: string,
      desde: number | null,
      hasta: number | null,
      page: number,
      limit: number,
   ) {
      // Condiciones para los filtros
      const filters: any = {};

      if (search) {
         filters.description = { contains: search, mode: 'insensitive' }; // Búsqueda por descripción
      }

      if (prodClass) {
         filters.class = prodClass; // Búsqueda por clase
      }

      if (desde && hasta) {
         filters.price = { gte: desde, lte: hasta }; // Búsqueda por rango de precio
      }

      console.log(filters);
      // Calcular el desplazamiento
      const offset = (page - 1) * limit;

      // Ejecutar consulta con Prisma
      const [products, totalProducts] = await prisma.$transaction([
         prisma.product.findMany({
            where: filters,
            skip: offset,
            take: limit,
         }),
         prisma.product.count({
            where: filters, // Asegúrate de contar usando los mismos filtros
         }),
      ]);

      const totalPages = Math.ceil(totalProducts / limit);

      return {
         products,
         pagination: {
            totalProducts,
            totalPages,
            currentPage: page,
            pageSize: limit,
         },
      };
   },
};
