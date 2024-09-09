import Link from "next/link"; 



export const FormFooter = () => {
    return (
        <form action="" className='flex flex-col m-5 w-full justify-center items-center'> 
            <div className='flex flex-row w-3/4 justify-center items-center'>
                <input className="block outline-none m-1 ml-0 p-4 w-1/2 text-sm text-white border-2 border-white rounded-[15px] bg-transparent focus:bg-white/25" placeholder="Nombre... " required />
                <input type='email' className="block outline-none m-1 mr-0 p-4 w-1/2 text-sm text-white border-2 border-white rounded-[15px] bg-transparent focus:bg-white/25" placeholder="Correo Electronico... " required />
            </div>  
            <textarea className="block outline-none m-1 p-4 w-3/4 h-24 text-sm text-white border-2 border-white rounded-[15px] bg-transparent focus:bg-white/25 " placeholder="Su mensaje... "  required />
            <div className='flex flex-row flex-wrap-reverse w-3/4 justify-center'>
                <div className="social-media flex flex-row inset-x-0 basis-1/2 mt-2 justify-center items-center text-white text-lg font-medium"> 
                    <Link href="https://www.instagram.com/rmconsuegrasrl/" className="mx-1 p-3 h-fit flex items-center text-pretty border-2 border-white rounded-full hover:bg-white/25"  target="_blank">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                        </svg>
                    </Link>
                    <Link href="https://www.facebook.com/rmconsuegra" className="mx-1 p-3 h-fit flex items-center text-pretty border-2 border-white rounded-full hover:bg-white/25"  target="_blank">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                        </svg>
                    </Link>
                    <Link href="/documents/catalogo-productos-consuegra.pdf" className="mx-1 p-3 h-fit flex items-center text-pretty border-2 border-white rounded-full hover:bg-white/25"  target="_blank">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
                        </svg>
                    </Link>
                </div>
                <button className="flex border-2 border-white text-white my-2 basis-1/2 h-14 items-center justify-center hover:bg-white/25 focus:ring-4 focus:outline-none font-medium rounded-[15px] text-md px-4 py-2 outline-none">Enviar</button>
            </div>
        </form>
    );
}