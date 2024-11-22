'use client';

import { useUser } from "@/components/auth/userContext";
import { AddressForm } from "@/components/form/address-form";
import { CustomerInfoForm } from "@/components/form/customer-info-form";
import { toast } from "@/components/hooks/use-toast";
import { AddressSchema, customerFormSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Address } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiCheckCircle } from "react-icons/fi";
import { LuLoader2 } from "react-icons/lu";

interface customerData {
   names: string;
   lastnames: string;
   email: string;
   phone: string;
}

export default function CheckOut(){
   const [sendingCustomer, setSendingCustomer] = useState(false); 
   const [sendingAddress, setSendingAddress] = useState(false);
   const [page, setPage] = useState(1);
   const router = useRouter();

   const { 
      user, 
      person, 
      setPerson,
      address, 
      loading, 
      checkVerification 
   } = useUser();

   useEffect(() => {
      if(!loading && !user) router.push('/');
      if(!loading && person) setPage(2);
      if(!loading && address) setPage(3);
   }, []);

   const customerForm = useForm<customerData>({
      resolver: zodResolver(customerFormSchema),
      mode: 'onBlur'
   });

   const addressForm = useForm<Address>({
      resolver: zodResolver(AddressSchema),
      mode: 'onBlur',
   });

   const submitCustomer = customerForm.handleSubmit(async (data: customerData) => {
      const { names, lastnames, email, phone } = data;
      
      if(!user) return;

      setSendingCustomer(true);
      const res = await fetch('/api/person/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            user_id: user.user_id,
            name: names + ' ' + lastnames,
            email,
            phone,
         }),
      })

      const { person, title, message, status } = await res.json();

      if(status === 200) {
         setPage(2);
         setPerson(person);
         setSendingCustomer(false);
         toast({
            title: title + ' ' + person.name,
            icon: <FiCheckCircle className="text-green-800"/>,
            description: message,
            variant: 'success',
         });
      }
   });

   const onSubmitAddress = addressForm.handleSubmit(async (data: Address) => {
      if(!person) return;
      setSendingAddress(true);
      const res = await fetch('/api/address/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            ...data,
            person_id: person.person_id,
         }),
      });

      const { address, title, message, status } = await res.json();

      if(status === 200) {
         setPage(3);
         setSendingAddress(false);
         toast({
            title: title + ' ' + address.name,
            icon: <FiCheckCircle className="text-green-800"/>,
            description: message,
            variant: 'success',
         });
      }
   });

   return(
      <main className="flex min-h-screen flex-col items-center p-0">
         <section className="flex flex-col mt-36 relative items-center justify-center w-full min-h-screen bg-white overflow-hidden">
            {loading ? (
               <div className="flex flex-col items-center justify-center w-full h-full">
                  <LuLoader2 className="animate-spin text-6xl text-red-800"/>
               </div>
            ) : (page == 1 && !person) ? (
                  <div className="flex flex-col w-1/2 my-12 px-8 py-12 lg:w-1/2 md:w-full md:px-16 sm:w-full mobile:w-full mobilesm:w-full">
                     <h1 
                        className="text-red-800 flex-col font-bold pb-8 text-start self-start mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-3xl">
                        Información personal
                        <span 
                           className="flex text-sm font-light text-gray-700">
                              Rellene los datos necesarios para continuar con su pedido.
                        </span>
                     </h1>
                     <CustomerInfoForm form={customerForm} onSubmit={submitCustomer} loading={sendingCustomer} />
                  </div>
            ) : (page == 2 && !address) ? (
               <div className="flex flex-col h-full my-12 px-8 py-12 lg:w-1/2 md:w-full md:px-16 sm:w-full mobile:w-full mobilesm:w-full">
                  <h1 
                     className="text-red-800 flex-col font-bold pb-8 text-start self-start mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-3xl">
                     Agregar una dirección
                     <span 
                        className="flex text-sm font-light text-gray-700">
                           Complete los campos siguientes para agregar su dirección.
                     </span>
                  </h1>
                  <AddressForm form={addressForm} onSubmit={onSubmitAddress} loading={sendingAddress} />
               </div>
            ) : (page == 3) ? (
               <div className="flex flex-col h-full my-12 px-8 py-12 lg:w-1/2 md:w-full md:px-16 sm:w-full mobile:w-full mobilesm:w-full">
                  <h1 
                     className="text-red-800 flex-col font-bold pb-8 text-start self-start mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-3xl">
                     Pagina 3
                     <span 
                        className="flex text-sm font-light text-gray-700">
                           Complete los campos siguientes para agregar su dirección.
                     </span>
                  </h1>
               </div>
            ): null}
         </section>
      </main>
   );
}