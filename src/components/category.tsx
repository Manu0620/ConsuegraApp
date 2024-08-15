import React from "react";
import { Categories } from "@/data/categories";
import Image from "next/image";

export const Category = () => {
    return(
        <div className="flex flex-row flex-wrap mb-20 gap-5 justify-center w-3/4 items-center text-pretty">
            {
                Categories.map((category, index)  => (
                    <div key={index} className="flex flex-col basis-1/3 h-52 justify-center items-center border rounded-[25px] shadow-md bg-blue-50">
                        <Image className="m-2 max-h-[80px] max-w-[100px] object-contain"  src={category.icon} alt="..." width={200} height={200}/>
                        <h1 className="mx-5 text-lg text-red-700 font-bold">{category.name}</h1>
                    </div>
                ))
            }
        </div>
        
    );
}