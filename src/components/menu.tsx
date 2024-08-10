import Image from 'next/image'
import SearchInput from './search-input'
import Logo from '../../public/Logo.png'
import { MenuItem } from '@/components/menu-item'

export default function Menu() {
    return(
        <nav className="flex w-full flex-col font-medium">
            <div className='nav-header relative z-50 flex flex-row w-full bg-white h-32 border border-transparent rounded-bl-[60px] rounded-br-[30px] overflow-hidden'>
                <div className="logo flex flex-row grow p-5 justify-center items-center font-bold">
                    <Image src={Logo} alt='...' width={80}/>
                    <h1 className="leading-none text-lg text-red-600 text-pretty">
                        <span className='pl-3 text-[14px] font-bold'>Grupo</span><br/>
                        <span className='leading-none text-4xl text-blue-800 text-pretty'>Consuegra</span><br/>
                        <span className='leading-none text-[8px] text-blue-800 text-pretty font-bold'>Importadores mayoristas de materiales electricos</span>
                    </h1>
                </div>
                <SearchInput />
            </div>
            <div className='nav-bar mt-[-60px] relative z-40 flex flex-row w-full h-36 justify-center items-center bg-red-700 border border-transparent rounded-bl-[60px] rounded-br-[30px] overflow-hidden'>
                <ul className='pt-14 flex flex-row text-lg  text-white'>
                    <MenuItem name="Productos" hasIcon={true}/>
                    <MenuItem name="Servicios" hasIcon={true}/>
                    <MenuItem name="Sucursales" hasIcon={true}/>
                    <MenuItem name="Nosotros" hasIcon={true}/>
                    <MenuItem name="Contactanos" hasIcon={false}/>
                </ul>
            </div>
        </nav>
    );
}
