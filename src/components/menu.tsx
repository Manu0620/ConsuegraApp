"use client";

import { Logo } from '@/components/logorm';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsFillPatchCheckFill, BsFillPatchExclamationFill } from 'react-icons/bs';
import { FaOpencart, FaUserCircle } from 'react-icons/fa';
import { IoExitSharp } from 'react-icons/io5';
import { LoginForm } from './auth/login-form';
import { UserVerification } from './auth/user-verification';
import { useUser } from './auth/userContext';
import { useCart } from './cart/cart-context';
import { MenuItems } from './menu-items';
import { Button } from './ui/button';


export const Menu = () => {

    const { user, loading, logout, isVerOpen, setIsVerOpen, checkVerification } = useUser();
    const { cartItems } = useCart();
    
    const cartLength = cartItems.length;
    const router = useRouter();

    return (
      <>
        <nav className="flex z-50 w-full flex-col font-medium fixed">
          <div className="nav-header px-10 relative z-50 flex flex-row w-full bg-white h-28 rounded-br-3xl rounded-bl-3xl overflow-hidden lg:px-10 md:px-10 sm:px-5 mobile:px-3 mobilesm:px-0 mobile:pr-5 mobilesm:pr-5 ">
            <Logo />
            {/* <SearchInput /> */}

            {!loading && user && !user.isVerified ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex self-center h-fit w-fit p-2">
                    <BsFillPatchExclamationFill
                      size={24}
                      className="text-yellow-400"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="flex flex-col px-3 py-2 gap-1 box-shadow-lg border-black rounded-xl justify-center items-center bg-yellow-400/90 text-black">
                    <p className="text-[12px] font-bold">
                      Cuenta sin verificar
                    </p>
                    <Button
                      className="p-2 h-8 rounded-xl font-semibold text-[11px] bg-black text-yellow-400 hover:bg-gray-950 hover:scale-105 transition ease-linear duration-100"
                      onClick={checkVerification}
                    >
                      Verificar
                    </Button>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : null}

            {!loading && user ? (
              <>
                <Button
                  className="self-center pr-4 text-red-800 hover:scale-110 hover:text-red-900 transition ease-linear duration-100"
                  onClick={logout}
                >
                  <IoExitSharp size={36} />
                </Button>
                <Link
                  href="#"
                  className="flex flex-row pr-4 gap-2 items-center justify-center"
                >
                  <FaUserCircle className="text-red-800 drop-shadow-lg text-3xl" />
                  <p className="text-[12px] font-semibold text-red-800">
                    {user.name}
                  </p>
                  {!loading && user && user.isVerified ? (
                    <BsFillPatchCheckFill size={18} className="text-blue-500" />
                  ) : null}
                </Link>
              </>
            ): null}

            {!loading && user == null ? <LoginForm open={false} /> : null}

            <Button
              onClick={() => router.push('/checkout')}
              className="relative self-center text-red-800 hover:scale-110 hover:text-red-900 transition ease-linear duration-100"
            >
              <FaOpencart size={36} className="drop-shadow-lg" />
              <span className="absolute -top-1 -right-1 text-xs font-bold text-black bg-red-100 rounded-full py-1 px-2">
                {cartLength}
              </span>
            </Button>
          </div>
          <div className="nav-bar flex flex-row mt-[-60px] relative z-40 w-full h-36 justify-center items-center bg-red-800 border-b border-white">
            <MenuItems />
          </div>
        </nav>
        <UserVerification
          open={isVerOpen}
          closeDiag={() => setIsVerOpen(false)}
        />
      </>
    );
}
