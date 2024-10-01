import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

interface Props {
    branch: any;
}

export const  BranchInfo = (props: Props) => {
    
    const { branch } = props;

    if(!branch) return null;

    return (
        <>
            <section className="flex flex-col bg-white w-full space-y-8 justify-center items-center py-12 px-6">
                <img 
                    className="drop-shadow-xl w-[50vh] object-fill contrast-125 border-b-2 border-red-700 rounded-3xl" 
                    src={branch.image} 
                    alt="..."
                />      
                <h1 
                    className="flex flex-col text-red-700 font-bold text-start text-pretty mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-4xl">
                        {branch.name}
                        <span 
                            className="flex flex-row gap-2 items-center font-light mobilesm:text-[12px] mobile:text-[12px] md:text-sm lg:text-md">
                            <FaMapLocationDot />{branch.short_location}
                        </span>
                </h1>
                <div className="flex flex-col border-t-2 rounded-br-3xl rounded-bl-3xl border-red-700 text-pretty pt-6 space-y-12 bg-red-50 items-center justify-center lg:w-3/4 md:w-10/12 sm:w-full mobile:w-full mobilesm:w-full">
                    
                    <div className="flex flex-row w-3/4 items-center justify-center">
                    <p className="font-normal text-red-700 text-md">
                        <b>{branch.name}</b> {branch.description}
                    </p>
                    </div>

                    <div className="flex flex-row items-center justify-center min-h-fit lg:scale-100 lg:w-3/4 lg:flex-row md:scale-90 md:w-full md:flex-row sm:scale-90 sm:w-full sm:flex-col mobile:scale-90 mobile:w-full mobile:flex-col mobilesm:scale-90 mobilesm:w-full mobilesm:flex-col">
                    <div className="flex flex-col p-4 basis-1/3 justify-center items-center text-center">
                        <MdOutlinePhone size={48} className="text-red-700"/>
                        <h1 className="font-bold text-xl text-red-700">Teléfono</h1>
                        {branch && <h1 className="font-medium text-md text-red-700">{branch.phone}</h1>}
                    </div>
                    <div className="flex flex-col p-4 basis-1/3 justify-center items-center text-center">
                        <FaMapLocationDot size={48} className="text-red-700"/>
                        <h1 className="font-bold text-xl text-red-700">Ubicación</h1>
                        {branch && <h1 className="font-medium text-md text-red-700">{branch.location}</h1>}
                    </div>
                    <div className="flex flex-col p-4 basis-1/3 justify-center items-center text-center">
                        <MdOutlineMail size={48} className="text-red-700"/>
                        <h1 className="font-bold text-xl text-red-700">Correo Electrónico</h1>
                        {branch && <h1 className="font-medium text-md text-red-700">{branch.email}</h1>}
                    </div>
                    </div>

                    <div className="social-media flex flex-row justify-center items-center text-white text-lg font-medium"> 
                        <Link href={branch.instagram} className="mx-2 p-3 h-fit flex items-center text-pretty border-2 border-red-700 rounded-full hover:bg-red-700/25"  target="_blank">
                            <svg className="w-6 h-6 text-red-700 dark:text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                            </svg>
                        </Link>
                        <Link href={branch.facebook} className="mx-2 p-3 h-fit flex items-center text-pretty border-2 border-red-700 rounded-full hover:bg-red-700/25"  target="_blank">
                            <svg className="w-6 h-6 text-red-700 dark:text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                            </svg>
                        </Link>
                        <Link href="/documents/catalogo-productos-consuegra.pdf" className="mx-2 p-3 h-fit flex items-center text-pretty border-2 border-red-700 rounded-full hover:bg-red-700/25"  target="_blank">
                            <svg className="w-6 h-6 text-red-700 dark:text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
                            </svg>
                        </Link>
                    </div>

                    <div className="flex flex-row w-full justify-center items-center text-center border-t border-red-700">
                        <p className="font-normal text-red-700 text-sm leading-8">
                        <b>Horario de atención: </b> Lunes a Viernes de 8:00am a 5:00pm
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col w-full min-h-[60vh] items-center bg-red-50 border-t-2 border-red-800">
                <h1 
                    className="text-4xl text-red-700 font-bold py-8 text-pretty mobilesm:text-2xl mobile:text-2xl md:text-3xl lg:text-4xl">
                        Ubicación
                </h1>
                <iframe className="w-full" src={branch.location_url} width="800" height="600"   loading="lazy"></iframe>
            </section>
        </>
    );
}