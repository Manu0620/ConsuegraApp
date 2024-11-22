import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import prisma from '../../lib/prisma'; // Asegúrate de que la ruta sea correcta
import path from 'path';
import fs from 'fs';

interface Product {
  ID: string;
  description: string;
  class: string;
  brand?: string; // Marca opcional
  inventory: number; // Inventario puede ser negativo
  price: string;
  minimumPrice: string;
}

export async function POST() {
  // Ruta del archivo Excel
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.xlsx');

  // Comprobar si el archivo existe
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  // Leer el archivo Excel
  const arrayBuffer = fs.readFileSync(filePath);
  const workbook = XLSX.read(arrayBuffer);

  // Suponiendo que los datos están en la primera hoja
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const jsonData: Product[] = XLSX.utils.sheet_to_json(worksheet);

  // Insertar datos en la base de datos
  try {
    const products = await prisma.product.createMany({
      data: jsonData.map(item => ({
        id: item.ID, // Asignar al campo 'id' del modelo Product
        description: item.description || '',
        class: item.class || '',
        brand: item.brand || '', // Asignar cadena vacía si no hay marca
        inventory: Number(item.inventory) ?? 0, // Inventario puede ser 0 si es null
        price: parseFloat(item.price) || 0,
        minimumPrice: parseFloat(item.minimumPrice) || 0,
      })),
    });

    return NextResponse.json({ message: 'Data migrated successfully', products });
  } catch (error) {
    console.error('Error migrating data:', error);
    return NextResponse.json({ error: 'Error migrating data', details: error }, { status: 500 });
  }
}