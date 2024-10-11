import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: Request) => {
   try {
      const { names, email, html, cv } = await req.json();

      // Configura el transporte con nodeMailer
      const transporter = nodemailer.createTransport({
         service: 'Gmail',
         host: "smtp.gmail.com",
         port: 465,
         secure: true,
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, 
         },
      });

      // Configurar los detalles del correo electrónico
      const mailOptions = {
         from: email,
         to: process.env.EMAIL_RECIPIENT,
         subject: `Solicitud de empleo via pagina web de ${names}`,
         html: html,
         attachements: [
            {
               filename: 'Curriculum Vitae.pdf',
               path: process.env.APP_URL + "/documents/catalogo-productos-consuegra.pdf",
            }
         ],
      };

      // Enviar el correo
      await transporter.sendMail(mailOptions);

      // Responder con éxito
      return NextResponse.json({ success: true, message: 'Email sent successfully!' });
   } catch (error) {
     console.error('Error sending email:', error);
     return NextResponse.json({ error: 'An error occurred while sending the email' }, { status: 500 });
   }
 };

