'use client';

// components/email/contact-mail.tsx
import React from "react";
import { Button, Container, Head, Heading, Img, Section, Tailwind, Text } from "@react-email/components";

interface Props {
   names?: string;
   phones?: string;
   email?: string;
   jobs?: string;
   message?: string;
}

export function ApplyMail(props: Props) {

   const { names, phones, email, jobs, message } = props;

   return (
      <Tailwind>
         <Container 
            className="w-[1100px] bg-red-100 rounded-xl font-sans">
            <Section 
               className="w-full bg-red-800 text-white text-center font-semibold rounded-xl">
               <Heading as="h2">Solicitud de empleo de {names}</Heading>
            </Section>
            <Section className="p-10 font-medium leading-none">
               <Img src='https://consuegra-app.vercel.app/LogoMono.png' alt="Logo" className="mx-auto"/>
               <Text>{message}</Text>
               <Text className="font-semibold">Correo del aplicante: <span className="font-medium">{email}</span></Text>
               <Text className="font-semibold">Teléfono del aplicante: <span className="font-medium">{phones}</span></Text>
               <Text className="font-semibold">Puesto al que aplica: <span className="font-medium">{jobs}</span></Text>
               <Button className="px-4 py-3 bg-red-800 text-red-100 rounded-xl" href="https://consuegra-app.vercel.app">Ir a la pagina</Button>
            </Section>
         </Container>
      </Tailwind>
   );
}