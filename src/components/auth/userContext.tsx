'use client';

import { Address, Person, User } from '@prisma/client';
import { render } from '@react-email/components';
import { useRouter } from 'next/navigation';
import {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { VerificationEmail } from '../email/verify-mail';
import { toast } from '../hooks/use-toast';

interface UserContextType {
   user: User | null;
   person: Person | null;
   address: Address | null;
   loading: boolean;
   isVerOpen: boolean;
   setIsVerOpen: (open: boolean) => void;
   setPerson: (person: Person | null) => void;
   setAddress: (address: Address) => void;
   checkVerification: () => void;
   login: (user: User) => void;
   logout: () => void;
   sendMail: (name: string, email: string, code: string) => Promise<boolean>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = useState<User | null>(null);
   const [person, setPerson] = useState<Person | null>(null);
   const [address, setAddress] = useState<Address | null>(null);

   const [loading, setLoading] = useState(false);
   const [isVerOpen, setIsVerOpen] = useState(false);

   const router = useRouter();

   useEffect(() => {
      const fetchUser = async () => {
         setLoading(true);
         const response = await fetch('/api/auth/me');
         if (response.ok) {
            const { user, person, address } = await response.json();
            setUser(user || null);
            setPerson(person || null);
            setAddress(address || null);
         }
         setLoading(false);
      };
      if (!user) fetchUser();
   }, [user, person, address]);

   const checkVerification = async () => {
      if (user !== null) {
         if (!user.isVerified) {
            const res = await fetch('/api/auth/verify');
            const { code } = await res.json();
            const isSent = await sendMail(user.name, user.email, code);
            if (isSent) {
               setIsVerOpen(true);
            }
         }
      }
   };

   const login = async (user: User) => {
      setUser(user);
      toast({
         variant: 'success',
         title: 'Inicio de sesión exitoso!',
         icon: <FiCheckCircle className="text-green-800" />,
         description: 'Bienvenido de vuelta!',
      });
   };

   const logout = async () => {
      const res = await fetch('/api/auth/logout');
      if (res.ok) {
         toast({
            description: 'Sesión cerrada correctamente!',
            icon: <FiCheckCircle className="text-green-800" />,
            variant: 'success',
         });
      }
      setUser(null);
      setPerson(null);
      setAddress(null);
      router.push('/');
   };

   const sendMail = async (name: string, email: string, code: string) => {
      const html = await render(
         <VerificationEmail names={name} email={email} code={code} />,
      );

      const res = await fetch('/api/auth/verify/email', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            email: email,
            html: html,
         }),
      });

      const resData = await res.json();
      const isSent = resData.status === 200;

      return isSent;
   };

   return (
      <UserContext.Provider
         value={{
            user,
            person,
            setPerson,
            address,
            setAddress,
            loading,
            login,
            logout,
            sendMail,
            isVerOpen,
            setIsVerOpen,
            checkVerification,
         }}
      >
         {children}
      </UserContext.Provider>
   );
};

export const useUser = () => {
   const context = useContext(UserContext);
   if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
   }
   return context;
};
