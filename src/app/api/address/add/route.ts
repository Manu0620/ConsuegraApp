import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/prisma";


export async function POST(req: NextRequest) {
   const body = await req.json();
   const { name, address_line_1, address_line_2, state, city, postalCode, person_id } = body;

   if(!person_id) {
      return NextResponse.json({ title: "Error!", message: "No se ha encontrado la persona.", status: 400 });
   }

   const newAddress = await prisma.address.create({
      data: {
         name,
         address_line_1,
         address_line_2,
         country: "República Dominicana",
         state,
         city,
         postalCode,
         person_id
      }
   });

   return NextResponse.json({ address: newAddress, title: "Dirección creada!", message: "La dirección ha sido creada exitosamente.", status: 200 });

}