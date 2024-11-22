import { sendEmail } from "@/app/api/lib/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
   try {
      const { email, html } = await request.json();

      console.log(html);

      await sendEmail(email,  html);

      return NextResponse.json({ message: 'Correo enviado!', status: 200});
   } catch (error) {
      return NextResponse.json({ error: error, status: 500});
   }
}