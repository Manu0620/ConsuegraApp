'use client';

// components/email/contact-mail.tsx
import React from "react";
import { Button, Container, Head, Heading, Img, Section, Tailwind, Text } from "@react-email/components";

interface Props {
   names?: string;
   phones?: string;
   email?: string;
   reason?: string;
   message?: string;
}

export function Mail (props: Props) {
   const { names, phones, email, reason, message } = props;

   return (
      <Tailwind>
         <Container 
            className="bg-red-50 p-2 rounded-xl font-sans drop-shadow-2xl">
            <Img src='https://consuegra-app.vercel.app/LogoMono.png' alt="Logo" className="mx-auto p-5"/>
            <Section 
               className="w-full h-16 bg-red-800 text-white text-center rounded-xl">
               <Heading as="h2">Mensaje de contacto de {names}</Heading>
            </Section>
            <Section className="p-5 font-medium leading-none">
               <Text>{message}</Text>
               <Text>Correo del cliente: <span className="font-medium">{email}</span></Text>
               <Text>Teléfono del cliente: <span className="font-medium">{phones}</span></Text>
               <Text>Motivo de contacto: <span className="font-medium">{reason}</span></Text>
               <Button className="px-4 py-3 bg-red-800 text-red-100 rounded-xl" href="https://consuegra-app.vercel.app">Ir a la pagina</Button>
            </Section>
         </Container>
      </Tailwind>
   );
}