import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma'; // Ajusta esta ruta según tu estructura

export async function POST(request: NextRequest) {
   try {
      const body = await request.json();
      const { user_id, name, email, phone } = body;

      // Crear una nueva persona
      const newPerson = await prisma.person.create({
         data: {
            user_id,
            name,
            email,
            phone,
         },
      });

      if (!newPerson) {
         return NextResponse.json({
            error: 'Error!',
            message: 'Ocurrió un error inesperado, intente de nuevo mas tarde!',
            status: 400,
         });
      }

      return NextResponse.json({
         person: newPerson,
         title: 'Éxito!',
         message: 'Tus datos han sido registrados con satisfactoriamente!',
         status: 200,
      });
   } catch (error) {
      console.error('Error creating person:', error);
   }
}
