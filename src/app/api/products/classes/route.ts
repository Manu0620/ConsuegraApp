// /pages/api/productClasses.ts
import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function GET() {
   try {
      const productClasses = await prisma.product.findMany({
         select: { class: true },
         distinct: ['class'], // Esto asegura que solo obtienes clases únicas
      });

      // Formatear las clases para que sean un array simple
      const classes = productClasses.map((item) => item.class);

      return NextResponse.json(classes);
   } catch (error) {
      console.error('Error fetching product classes:', error);
      return NextResponse.json(
         { error: 'Error fetching product classes' },
         { status: 500 },
      );
   }
}
