import Image from 'next/image';
import SearchInput from './search-input';


export default function Menu() {
    return(
        <nav className="flex w-full flex-col font-medium">
            <div className='nav-header relative z-10 flex flex-row w-full bg-white h-32 border border-transparent rounded-bl-[60px] rounded-br-[30px] overflow-hidden'>
                <div className="logo flex grow p-5 justify-center items-center font-bold">
                    <h1 className="pl-5 text-lg text-red-600 text-pretty">Grupo<br/><span className='text-4xl text-blue-700 text-pretty'>Consuegra</span></h1>
                </div>
                <SearchInput />
            </div>
            <div className='nav-bar mt-[-60px] relative z-0 flex flex-row w-full h-36 justify-center items-center bg-red-700 border border-transparent rounded-bl-[60px] rounded-br-[30px] overflow-hidden'>
                <ul className='pt-14 flex flex-row text-lg  text-white'>
                    <li className='mx-3 hover:text-blue-950'>
                        <a className='flex items-center' href="">
                            Productos
                            <svg className="w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
                            </svg>
                        </a>
                    </li>
                    <li className='mx-3 hover:text-blue-950'>
                        <a className='flex items-center' href="">
                            Servicios
                            <svg className="w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
                            </svg>
                        </a>
                    </li>
                    <li className='mx-3 hover:text-blue-950'>
                        <a className='flex items-center' href="">
                            Sucursales
                            <svg className="w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
                            </svg>
                        </a>
                    </li>
                    <li className='mx-3 hover:text-blue-950'>
                        <a className='flex items-center' href="">
                            Nosotros
                            <svg className="w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
                            </svg>
                        </a>
                    </li>
                    <li className='mx-3 hover:text-blue-950'>
                        <a className='flex items-center' href="">
                            Contactanos
                            <svg className="w-4 h-4 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
