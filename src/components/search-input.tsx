import React from "react";

const SearchInput = () => {
    return(
        <div className="flex grow items-center justify-center px-3">
            <form className="w-1/2">   
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-red-500 white:text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="search" className="block outline-none w-full p-4 ps-10 text-sm text-red-900 border border-red-300 rounded-[15px] bg-gray-50 focus:ring-red-500 focus:border-red-500 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 white:text-white white:focus:ring-red-500 white:focus:border-red-500" placeholder="Busca un articulo por nombre o por # de articulo..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-[15px] text-sm px-4 py-2 white:bg-red-600 white:hover:bg-red-700 white:focus:ring-red-800">Buscar</button>
                </div>
            </form>
        </div>  
    );
}

export default SearchInput;