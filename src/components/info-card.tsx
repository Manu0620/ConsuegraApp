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
                <div key={props.title}  
                    className="bg-gray-100 flex flex-row-reverse flex-wrap-reverse mb-8 min-h-[30vh] rounded-3xl shadow-md lg:w-10/12 lg:flex-row-reverse lg:self-end md:w-10/12 md:flex-col-reverse md:self-center sm:w-10/12 sm:flex-col-reverse sm:self-center mobile:w-10/12 mobile:flex-col-reverse mobile:self-center mobilesm:w-11/12 mobilesm:flex-col-reverse mobilesm:self-center hover:border hover:border-red-800 ease-linear duration-100 overflow-hidden">
                    <div className="flex flex-col basis-7/12 p-10 bg-red-50 justify-center items-center text-pretty text-center text-red-900">
                        <h1 className="text-xl font-bold">{props.title}</h1>
                        <p className="text-sm text-center text-gray-700 pt-2 font-normal lg:text-md md:text-md sm:text-[14px] mobile:text-[12px] mobilesm:text-[12px]">{props.body}</p>
                    </div>
                    <div className="flex basis-5/12 ">
                        <img className="contrast-125 object-cover" src={props.image} alt="..."/>
                    </div>
                </div>
            :
                <div key={props.title}  
                    className="bg-gray-100 flex flex-row flex-wrap mb-8 min-h-[30vh] rounded-3xl shadow-md lg:w-10/12 lg:flex-row lg:self-start md:w-10/12 md:flex-col-reverse md:self-center sm:w-10/12 sm:flex-col-reverse sm:self-center mobile:w-10/12 mobile:flex-col-reverse mobile:self-center mobilesm:w-11/12 mobilesm:flex-col-reverse self-center hover:border hover:border-blue-800 ease-linear duration-100 overflow-hidden">
                    <div className="flex flex-col basis-7/12 p-10 bg-blue-50 justify-center items-center text-pretty text-center text-blue-900 ">
                        <h1 className="text-xl font-bold">{props.title}</h1>
                        <p className="text-sm text-gray-700 pt-2 font-normal lg:text-sm md:text-md sm:text-[14px] mobile:text-[12px] mobilesm:text-[12px]">{props.body}</p>
                    </div>
                    <div className="flex basis-5/12">
                        <img className="contrast-125 object-cover" src={props.image} alt="..."/>
                    </div>
                </div>
            }
        </>
    );
}

