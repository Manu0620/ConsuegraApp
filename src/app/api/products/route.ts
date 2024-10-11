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

export const GETbyId = async (productId: string) => {
   try {
      const result = await fetch(`https://fakestoreapi.com/products/${productId}`, {
         headers: {
         'Content-Type': 'application/json',
         },
         method: 'GET',
      });
   
      if (!result.ok) {
         return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
      }
   
      const product = await result.json();
      return NextResponse.json({ product });
   } catch (error) {
      console.error('Error fetching product:', error);
      return NextResponse.json({ error: 'An error occurred while fetching product' }, { status: 500 });
   }
};