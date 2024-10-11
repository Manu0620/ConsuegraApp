import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
      const result = await fetch('https://fakestoreapi.com/products', {
         headers: {
         'Content-Type': 'application/json',
         },
         method: 'GET',
      });

      if (!result.ok) {
         return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
      }

      const products = await result.json();
      return NextResponse.json({ products });
   } catch (error) {
      console.error('Error fetching products:', error);
      return NextResponse.json({ error: 'An error occurred while fetching products' }, { status: 500 });
  }
};