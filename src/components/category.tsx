import React from "react";
import { Categories } from "@/data/categories";
import Image from "next/image";

export const Category = () => {
    return(
        <div className="flex flex-row flex-wrap justify-center w-2/3 items-center text-pretty">
            {
                Categories.map((category, index)  => (
                    <div key={index} className="flex flex-col basis-3/12 m-3 justify-center w-64 h-48 items-center border rounded-[20px] shadow-md bg-red-50">
                        <Image className="m-2 max-h-[80px] max-w-[100px] object-contain"  src={category.icon} alt="..." width={200} height={200}/>
                        <h1 className="mx-5 text-lg text-red-700 font-bold">{category.name}</h1>
                    </div>
                ))
            }
        </div>
        
    );
}