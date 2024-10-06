import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
   const result = await fetch('https://fakestoreapi.com/products', {
      headers: {
         'Content-Type': 'application/json',
      },
      method: 'GET',
   });
   
   const products = await result.json();
   return NextResponse.json({products});
}