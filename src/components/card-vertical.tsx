
interface Props{
    image: string, 
    titulo: string,
    descripcion: string
}


export const CardVertical = (props: Props) => {
    return(
        <div  className="flex flex-col m-3 bg-gray-100 basis-4/12 shadow-xl border border-transparent rounded-[25px] text-pretty overflow-hidden">
            <div className="flex basis-5/12">
                <img src={props.image} alt="..." className="object-cover"/>
            </div>
            <div className="flex flex-col basis-7/12 p-8 text-pretty">
                <h1 className="text-xl font-medium text-red-700">{props.titulo}</h1>
                <p className="text-md font-normal pt-3 text-gray-700 lg:text-[14px] md:text-[14px] sm:text-[14px] mobile:text-[12px] mobilesm:text-[12px]">{props.descripcion}</p>
            </div>
        </div>
    );
}