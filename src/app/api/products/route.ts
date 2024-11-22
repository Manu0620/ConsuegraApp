import { NextRequest, NextResponse } from 'next/server';
import { ProductService } from '../../api/services/products_service';

export async function GET(req: NextRequest) {
   try {
     const { searchParams } = new URL(req.url);
     const page = Number.isNaN(parseInt(searchParams.get('page') || '')) ? 1 : parseInt(searchParams.get('page') || '1');
     const limit = Number.isNaN(parseInt(searchParams.get('limit') || '')) ? 10 : parseInt(searchParams.get('limit') || '10');
     
     const productId = searchParams.get('id');

     const text = searchParams.get('search');
     const prodClass = searchParams.get('class');
     const desde = searchParams.get('desde') ? parseFloat(searchParams.get('desde') || '0') : null;
     const hasta = searchParams.get('hasta') ? parseFloat(searchParams.get('hasta') || '0') : null;
 
     if (productId) {
       const product = await ProductService.getProductById(productId);
       return NextResponse.json(product);
     }
 
     // Filtrado por texto, rango de precio o categoría
     if (text || desde !== null || hasta !== null) {
       const data = await ProductService.getFilteredProducts(
         text || '',
         prodClass || '',
         desde !== null ? desde : 0,
         hasta !== null ? hasta : 0,
         page,
         limit
       );
 
       return NextResponse.json(data);
     }
 
     // Si no se aplican filtros, devolver todos los productos
     const data = await ProductService.getAllProducts(page, limit);
     return NextResponse.json(data);
 
   } catch (error) {
     return NextResponse.json({ error: 'Error fetching products', details: error }, { status: 500 });
   }
 }