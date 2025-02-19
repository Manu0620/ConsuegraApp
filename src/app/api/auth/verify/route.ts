import { NextRequest, NextResponse } from 'next/server';
import {
   generateVerificationCode,
   verifyUser,
} from '@/app/api/services/user_service';
import { cookies } from 'next/headers';
import prisma from '../../lib/prisma';

export async function GET(request: NextRequest) {
   const { searchParams } = new URL(request.url);
   const code = searchParams.get('code');
   const user_id = cookies().get('uid')?.value;

   if (!user_id) {
      return NextResponse.json({
         error: 'No has iniciado sesión!',
         message: 'Necesitas iniciar sesión para continuar.',
         status: 401,
      });
   }

   const verificationCode = await prisma.verificationCode.findFirst({
      where: {
         user_id,
         expires_at: { gt: new Date() },
         used: false,
      },
   });

   // Si el código ya existe y no está vencido, devuelve un mensaje apropiado
   if (verificationCode && !searchParams.has('code')) {
      return NextResponse.json({
         error: 'Código reenviado!',
         message: 'Ya se ha enviado un código de verificación a tu correo.',
         code: verificationCode.code,
         status: 400,
      });
   } else if (!verificationCode && !searchParams.has('code')) {
      const newCode = await generateVerificationCode(user_id);
      return NextResponse.json({
         error: 'Código expirado!',
         message: 'Enviamos un nuevo código, revise su bandeja de entrada.',
         code: newCode,
         status: 403,
      });
   }

   if (!code) {
      return NextResponse.json({
         error: 'Código requerido!',
         message: 'Por favor, ingrese el código de verificación.',
         status: 401,
      });
   }

   try {
      const isVerified = await verifyUser(code, user_id);

      if (isVerified) {
         return NextResponse.json({
            message: 'Usuario verificado correctamente!',
            location: '/login',
            status: 200,
         });
      } else {
         const newCode = await generateVerificationCode(user_id);
         return NextResponse.json({
            error: 'Código expirado!',
            message: `Reenviamos un nuevo código a ${newCode}`,
            code: newCode,
            status: 400,
         });
      }
   } catch (error) {
      return NextResponse.json(
         { error: 'Internal server error' },
         { status: 500 },
      );
   }
}
