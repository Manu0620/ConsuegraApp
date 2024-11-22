import nodemailer from 'nodemailer';

export const sendEmail =  async (email: string, html: string) => {
   try {

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
         from: process.env.EMAIL_USER,
         to: email,
         subject: `Verifica tu dirección de correo electrónico`,
         html: html,
      };

      // Enviar el correo
      await transporter.sendMail(mailOptions);

   } catch (error) {
     console.error('Error sending email:', error);
   }
}