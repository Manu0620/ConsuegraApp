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
                <div className="bg-white flex flex-row-reverse flex-wrap-reverse mb-8 mr-28 w-6/12 min-h-60 border border-transparent rounded-[25px] shadow-md lg:w-6/12 lg:mr-28 lg:flex-row-reverse md:w-9/12 md:mr-0 md:flex-col-reverse sm:w-9/12 sm:mr-0 sm:flex-col-reverse mobile:w-9/12 mobile:mr-0 mobile:flex-col-reverse overflow-hidden">
                    <div className="flex flex-col basis-7/12 p-10 justify-center items-center text-pretty text-center text-red-800">
                        <h1 className="text-xl font-bold">{props.title}</h1>
                        <p className="text-sm text-center pt-2 font-medium">{props.body}</p>
                    </div>
                    <div className="flex basis-5/12 ">
                        <img key={props.title} className="object-cover" src={props.image} alt="..."/>
                    </div>
                </div>
            :
                <div className="bg-white flex flex-row flex-wrap mb-8 ml-28 w-6/12 min-h-70 border border-transparent rounded-[25px] shadow-md lg:w-6/12 lg:ml-28 lg:flex-row md:w-9/12 md:ml-0 md:flex-col-reverse sm:w-9/12 sm:ml-0 sm:flex-col mobile:w-9/12 mobile:ml-0 mobile:flex-col-reverse overflow-hidden">
                    <div className="flex flex-col basis-7/12 p-10 justify-center items-center text-pretty text-center text-blue-900 ">
                        <h1 className="text-xl font-bold">{props.title}</h1>
                        <p className="text-sm pt-2 font-medium">{props.body}</p>
                    </div>
                    <div className="flex basis-5/12 ">
                        <img key={props.title} className="object-cover" src={props.image} alt="..."/>
                    </div>
                </div>

            }
        </>
    );
}

