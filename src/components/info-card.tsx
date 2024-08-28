import React from "react";
import Image from "next/image";
import { isReadable } from "stream";

interface Props{
    image: string,
    title: string, 
    body: string, 
    isReverse?: boolean
}

export const InfoCard = (props: Props) => {
    return(
        <>
            {
            props.isReverse 
            ?
                <div key={props.title}  className="bg-white flex flex-row-reverse flex-wrap-reverse mb-8 mr-32 w-6/12 min-h-[30vh] border border-transparent rounded-[25px] shadow-md lg:w-6/12 lg:mr-32 lg:flex-row-reverse md:w-8/12 md:mr-0 md:flex-col-reverse sm:w-9/12 sm:mr-0 sm:flex-col-reverse mobile:w-9/12 mobile:mr-0 mobile:flex-col-reverse mobilesm:w-10/12 mobilesm:mr-0 mobilesm:flex-col-reverse overflow-hidden">
                    <div className="flex flex-col basis-7/12 p-10 justify-center items-center text-pretty text-center text-red-800">
                        <h1 className="text-xl font-bold mobilesm:text-md">{props.title}</h1>
                        <p className="text-sm text-center text-gray-700 pt-2 font-normal lg:text-md md:text-md sm:text-[14px] mobile:text-[12px] mobilesm:text-[12px]">{props.body}</p>
                    </div>
                    <div className="flex basis-5/12 ">
                        <img className="object-cover" src={props.image} alt="..."/>
                    </div>
                </div>
            :
                <div key={props.title}  className="bg-white flex flex-row flex-wrap mb-8 ml-32 w-6/12 min-h-[30vh] border border-transparent rounded-[25px] shadow-md lg:w-6/12 lg:ml-32 lg:flex-row md:w-8/12 md:ml-0 md:flex-col-reverse sm:w-9/12 sm:ml-0 sm:flex-col-reverse mobile:w-9/12 mobile:ml-0 mobile:flex-col-reverse mobilesm:w-10/12 mobilesm:ml-0 mobilesm:flex-col-reverse overflow-hidden">
                    <div className="flex flex-col basis-7/12 p-10 justify-center items-center text-pretty text-center text-blue-900 ">
                        <h1 className="text-xl font-bold mobilesm:text-md ">{props.title}</h1>
                        <p className="text-sm  text-gray-700 pt-2 font-normal lg:text-sm md:text-md sm:text-[14px] mobile:text-[12px] mobilesm:text-[12px]">{props.body}</p>
                    </div>
                    <div className="flex basis-5/12">
                        <img className="object-cover" src={props.image} alt="..."/>
                    </div>
                </div>
            }
        </>
    );
}

