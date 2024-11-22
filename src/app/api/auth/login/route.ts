import { NextRequest, NextResponse } from "next/server";
import { authenticateUser, generateVerificationCode} from "../../services/user_service";
import { login } from "../../lib/api_helpers";


export const POST = async (req: NextRequest) => {

   const { email, password } = await req.json();

   // Authenticate the user
   const { user, passwordMatch } = await authenticateUser(email, password);

   if (!user) 
      return NextResponse.json({ error: "Usuario no encontrado!", message: "Cree su cuenta, e inténtelo nuevamente!", status: 404 });

   if (!passwordMatch) 
      return NextResponse.json({ error: "Credenciales invalidas!", message: "Verifique e inténtelo nuevamente! ", status: 401});

   const res = NextResponse.json({ user, status: 200 });
   login(user);
   return res;
};


   
