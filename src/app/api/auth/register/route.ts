import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/app/api/services/user_service';
import { sendEmail } from '../../lib/email';

export async function POST(request: NextRequest) {
   try {
      const { name, userEmail, password } = await request.json();

      // Register the user and generate the verification token
      const { user } = await registerUser(name, userEmail, password);

      if (!user) {
         return NextResponse.json(
            { error: 'El usuario ya existe!' },
            { status: 400 },
         );
      }

      return NextResponse.json(
         { message: 'User registered. Please verify your email.' },
         { status: 200 },
      );
   } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 });
   }
}
