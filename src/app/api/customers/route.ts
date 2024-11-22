import { NextResponse, NextRequest } from 'next/server';
import { customerService } from '../services/customer_service'; // Asegúrate de que la ruta sea correcta

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // Obtener datos del cuerpo de la solicitud

    // Validar los datos necesarios
    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Crear el cliente usando el servicio
    const newCustomer = await customerService.createCustomer(data);

    // Retornar el nuevo cliente creado
    return NextResponse.json(newCustomer, { status: 201 });
  } catch (error) {
    // Manejo de errores
    return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 });
  }
}