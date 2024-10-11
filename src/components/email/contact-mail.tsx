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
            className="w- bg-red-100 rounded-xl font-sans">
            <Section 
               className="w-full bg-red-800 text-white text-center font-semibold rounded-xl">
               <Heading as="h2" className="flex flex-col">
                  Mensaje de contacto de 
                  <span className="flex">
                     {names}
                  </span>
               </Heading>
            </Section>
            <Section className="p-10 font-medium leading-none">
               <Img src='https://consuegra-app.vercel.app/LogoMono.png' alt="Logo" className="mx-auto"/>
               <Text>{message}</Text>
               <Text className="font-semibold">Correo del cliente: <span className="font-medium">{email}</span></Text>
               <Text className="font-semibold">Teléfono del cliente: <span className="font-medium">{phones}</span></Text>
               <Text className="font-semibold">Motivo de contacto: <span className="font-medium">{reason}</span></Text>
               <Button className="px-4 py-3 bg-red-800 text-red-100 rounded-xl" href="https://consuegra-app.vercel.app">Ir a la pagina</Button>
            </Section>
         </Container>
      </Tailwind>
   );
}