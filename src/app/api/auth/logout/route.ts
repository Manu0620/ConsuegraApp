import { NextRequest, NextResponse } from 'next/server';
import { logout } from '../../lib/api_helpers';

export async function GET(request: NextRequest) {
   logout();
   return NextResponse.json({
      message: 'Sesión cerrada correctamente!',
      status: 200,
   });
}
