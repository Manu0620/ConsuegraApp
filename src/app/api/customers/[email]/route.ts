import { NextRequest, NextResponse } from 'next/server';
import { customerService } from '../../services/customer_service'; // Asegúrate de que la ruta sea correcta

export async function GET(req: NextRequest, { params }: { params: { email: string } }) {
  const { email } = params;

  // Uso del servicio para verificar si el cliente existe
  const customer = await customerService.getCustomerByEmail(email);

  if (!customer) {
    return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
  }

  return NextResponse.json(customer);
}