import nodeMailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
      const { names, email, message } = await req.json();

      console.log('names:', names, 'email:', email, 'message:', message);

      // Configura el transporte con nodeMailer
      const transporter = nodeMailer.createTransport({
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
         subject: `Contacto via pagina web de ${names}`,
         text: message,
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