// components/email/verification-mail.tsx
'use client';

import React from 'react';
import {
   Button,
   Container,
   Head,
   Heading,
   Img,
   Section,
   Tailwind,
   Text,
} from '@react-email/components';
import { Heading2 } from 'lucide-react';

interface VerificationEmailProps {
   names: string;
   email: string;
   code: string;
}

export function VerificationEmail({
   names,
   email,
   code,
}: VerificationEmailProps) {
   return (
      <Tailwind>
         <Container className="bg-red-50 p-2 rounded-xl font-sans drop-shadow-2xl">
            <Section className="w-full h-16 bg-red-800 text-red-50 font-medium text-center rounded-xl">
               <Heading as="h2">Verificación de cuenta para {names}</Heading>
            </Section>
            <Img
               src="https://consuegra-app.vercel.app/LogoMono.png"
               alt="Logo"
               className="mx-auto p-5 drop-shadow-lg"
            />
            <Section className="whitespace-normal p-5 text-justify text-md font-medium leading-none">
               <Text>
                  Gracias por registrarte, {names}. Para verificar tu cuenta
                  introduce el siguiente código en la pagina:{' '}
               </Text>
               <Heading2>{code}</Heading2>
               <Text className="text-gray-800 font-light">
                  Si no has solicitado este código, ignora este mensaje.
               </Text>
            </Section>
         </Container>
      </Tailwind>
   );
}
