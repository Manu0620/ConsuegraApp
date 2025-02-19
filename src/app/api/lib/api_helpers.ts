'use server';

import { cookies } from 'next/headers';
import { User } from '@prisma/client';
import { generateVerificationCode } from '../services/user_service';

export async function login(data: User) {
   const uid = data.user_id;

   cookies().set({
      name: 'uid',
      value: uid,
      httpOnly: true,
      path: '/',
   });
}

export async function logout() {
   const cookieStore = await cookies();
   cookieStore.delete('uid');
}
