import Link from 'next/link';
import { MdOutlinePhone } from 'react-icons/md';
import { RiUser6Fill } from 'react-icons/ri';

interface Props {
   image: string;
   name: string;
   phone: string;
   location: string;
   url: string;
   extensions: {
      name: string;
      number: string;
      department: string;
   }[];
}

export const BranchCard = (props: Props) => {
   return (
      <div
         key={props.name}
         className="flex flex-col p-5 overflow-hidden hover:scale-105 transition ease-in-out duration-100 lg:basis-1/3 md:basis-1/2 sm:basis-full mobile:basis-full mobilesm:basis-full"
      >
         <Link href={props.url}>
            <img
               key={props.name}
               src={props.image}
               alt="..."
               className="drop-shadow-xl contrast-125 border-b-2 border-b-red-800 min-w-full min-h-72 max-h-72 rounded-3xl overflow-hidden object-cover "
            />
         </Link>
         <div key={props.name} className="w-full p-3">
            <span className="flex flex-row items-center text-pretty">
               <svg
                  className="w-6 h-6 text-red-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
               >
                  <path
                     fillRule="evenodd"
                     d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z"
                     clipRule="evenodd"
                  />
               </svg>
               <p className="text-gray-700 font-normal text-[12px] pl-1">
                  {props.location}
               </p>
            </span>
            <h1 className=" text-red-700 font-bold text-lg">{props.name}</h1>
            <span className="flex flex-row my-1 items-center text-pretty">
               <MdOutlinePhone size={20} className="text-red-700" />
               <p className="text-gray-700 font-medium text-md pl-1">
                  {props.phone}
               </p>
            </span>
            <h3 className="text-red-700 my-1 font-medium text-md">
               Extenciones
            </h3>
            <span className="flex flex-row text-pretty w-full text-gray-500 font-normal text-sm leading-snug">
               {props.extensions.map((extension, index) => (
                  <span
                     key={index}
                     className="flex flex-col basis-1/2 items-start text-pretty text-start"
                  >
                     <RiUser6Fill size={20} className="text-red-700" />
                     <p className="font-medium text-[12px] mx-1">
                        {extension.name}
                     </p>
                     <p className="text-red-700 text-[12px] font-medium mx-1">
                        {extension.number}
                     </p>
                     <p className="text-[12px] mx-1">{extension.department}</p>
                  </span>
               ))}
            </span>
         </div>
      </div>
   );
};
