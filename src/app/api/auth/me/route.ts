import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function GET(req: NextRequest) {
   const user_id = req.cookies.get('uid')?.value;

   if (!user_id) {
      return NextResponse.json({
         error: 'No estas logueado!',
         message: 'Necesitas iniciar sesión para continuar.',
         status: 401,
      });
   }

   const user = await prisma.user.findUnique({ where: { user_id } });
   const person = await prisma.person.findUnique({ where: { user_id } });

   if (!person) {
      return NextResponse.json({
         error: 'No se encontró la persona!',
         message: 'No se encontró la persona asociada a tu cuenta.',
         status: 404,
      });
   }

   const { person_id } = person;

   const address = await prisma.address.findFirst({
      where: { person_id: person_id },
   });

   if (!user_id) {
      return NextResponse.json({
         error: 'No estas logueado!',
         message: 'Necesitas iniciar sesión para continuar.',
         status: 401,
      });
   }

   return NextResponse.json({ user, person, address, status: 200 });
}
