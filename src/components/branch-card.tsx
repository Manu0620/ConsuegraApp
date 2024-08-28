import Link from "next/link"

interface Props{
    image: string,
    name: string,
    phone: string, 
    location: string, 
    url: string,
    extensions: {
        name: string,
        number: string, 
        department: string
    }[]
}

export const BranchCard = (props: Props) =>{
    return(
        <div key={props.name} className="flex flex-col p-5 overflow-hidden lg:basis-1/3 md:basis-1/2 sm:basis-full">
            <Link href={props.url} >
                <img key={props.name} src={props.image} alt="..." className="min-w-full border-2 border-red-700 min-h-72 max-h-72 shadow-lg rounded-[25px] overflow-hidden object-cover"/>
            </Link>
            <div key={props.name} className="w-full p-3">
                <span className="flex flex-row items-center text-pretty">
                    <svg className="w-6 h-6 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-gray-500 font-normal text-[12px] pl-1">{props.location}</p>
                </span>
                <h1 className=" text-red-700 font-semibold text-lg">{props.name}</h1>
                <span className="flex flex-row my-1 items-center text-pretty">
                    <svg className="w-6 h-6 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                    </svg>
                    <p className="text-gray-500 font-semibold text-md pl-1">{props.phone}</p>
                </span>
                <h3 className="text-red-700 mt-1 font-semibold text-md">Extenciones</h3>
                <span className="flex flex-col text-pretty w-full text-gray-500 font-normal text-sm pl-1 leading-snug">
                    {
                        props.extensions.map((extension, index) => (
                            <span key={index} className="flex flex-row items-center text-pretty text-center">
                                <svg className="w-6 h-6 text-red-700 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd"/>
                                </svg>
                                <p className="font-semibold text-[12px] mx-1">{extension.name}</p>
                                <p className="text-red-700 text-[12px] font-medium mx-1">{extension.number}</p>
                                <p className="text-[12px] mx-1">{extension.department}</p>
                            </span>
                        ))
                    }
                </span>
            </div>
        </div>

        
    );
}