import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma'; // Asegúrate de que el cliente de Prisma esté configurado

// Función para registrar un usuario y enviar el token de verificación
export const registerUser = async (
   name: string,
   email: string,
   password: string,
) => {
   try {
      // Verifica si el usuario ya existe
      const existingUser = await prisma.user.findUnique({
         where: { email },
      });

      if (existingUser) return { user: null, token: null, existingUser };

      // Hashea la contraseña
      const hashedPassword = await hash(password, 10);

      // Crea el usuario
      const user = await prisma.user.create({
         data: {
            name,
            email,
            password: hashedPassword,
         },
      });

      return { user, existingUser };
   } catch (error) {
      console.error('Error in registerUser:', error);
      throw error;
   }
};

export const authenticateUser = async (email: string, password: string) => {
   const user = await prisma.user.findUnique({ where: { email } });
   if (!user) return { user: null, passwordMatch: false };

   const passwordMatch = await compare(password, user.password);
   if (!passwordMatch) return { user, passwordMatch: false };

   return { user, passwordMatch: true, isVerified: true };
};

// Función para verificar al usuario usando un token
export const verifyUser = async (code: string, user_id: string) => {
   try {
      // Look for the code in the database
      const verificationCode = await prisma.verificationCode.findFirst({
         where: {
            code,
            user_id,
            expires_at: { gt: new Date() }, // Check if the code is not expired
            used: false,
         },
      });

      if (!verificationCode) throw new Error('Invalid or expired code');

      // Update the user to mark them as verified
      await prisma.user.update({
         where: { user_id: verificationCode.user_id },
         data: { isVerified: true },
      });

      // Mark the code as used
      await prisma.verificationCode.update({
         where: { id: verificationCode.id },
         data: { used: true },
      });

      return true;
   } catch (error) {
      console.error('Error in verifyUser:', error);
      return false;
   }
};

// Helper function to generate a random code
const generateRandomCode = (length: number = 6) => {
   return Math.floor(100000 + Math.random() * 900000)
      .toString()
      .substring(0, length); // 6-digit code
};

export const generateVerificationCode = async (user_id: string) => {
   const verificationCode = await prisma.verificationCode.findFirst({
      where: {
         user_id,
         expires_at: { gt: new Date() }, // Check if the code is not expired
         used: false,
      },
   });

   if (verificationCode) return verificationCode.code;

   const code = generateRandomCode();
   const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // Expire in 1 hour

   await prisma.verificationCode.create({
      data: {
         code,
         user_id,
         expires_at: expiresAt,
      },
   });

   return code;
};

// Función para generar un token de acceso
export const generateAccessToken = (user_id: string) => {
   return jwt.sign({ user_id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
};
