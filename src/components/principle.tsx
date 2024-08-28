"use client";

import React from "react";
import { Principios } from "./constants/principles";


export const Principles = () => {
    return(
        <div className="flex flex-row w-3/4 min-h-52 justify-center items-center lg:w-3/4 lg:flex-row md:w-6/12 md:flex-col sm:flex-col sm:w-3/4 mobile:flex-col mobile:w-3/4 mobilesm:flex-col mobilesm:w-10/12">
            {
                Principios.map((principio, index) => (
                    <div key={index} className="flex flex-col m-3 bg-gray-100 basis-4/12 shadow-xl border border-transparent rounded-[25px] text-pretty overflow-hidden">
                        <div className="flex basis-5/12">
                            <img src={principio.image} alt="..." className="object-cover"/>
                        </div>
                        <div className="flex flex-col basis-7/12 p-8 text-pretty">
                            <h1 className="text-xl font-bold text-red-800">{principio.titulo}</h1>
                            <p className="text-md font-normal pt-3 text-gray-700 lg:text-[14px] md:text-[14px] sm:text-[14px] mobile:text-[12px] mobilesm:text-[12px]">{principio.descripcion}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}