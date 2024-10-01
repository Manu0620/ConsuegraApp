import { WiStars } from "react-icons/wi";

interface Props {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

export const Principle = (props: Props) => { 
    return(
        <>
            {
                props.reverse ? (
                    <div className="flex flex-row space-y-14 lg:w-3/4 lg:self-end lg:flex-row md:self-center md:w-full md:flex-row sm:w-full sm:flex-col-reverse mobile:w-full mobile:flex-col-reverse mobilesm:flex-full mobilesm:flex-col-reverse">    
                        <div className="flex flex-row space-y-6 justify-center items-center text-pretty text-start text-red-700 lg:w-1/2 md:w-1/2 sm:w-full mobile:w-full mobilesm:w-full">
                            <div className="flex flex-col justify-center items-center text-pretty text-red-700">
                                <WiStars size={140} className="flex text-red-800"/>
                            </div>
                            <div className="flex flex-col">
                                <h1 
                                    className="flex text-red-800 font-bold text-pretty pb-3 mobilesm:text-xl mobile:text-xl md:text-2xl lg:text-2xl">
                                    {props.title}
                                </h1>
                                <p 
                                    className="flex text-red-800/90 font-light">
                                    {props.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:w-1/2 md:w-1/2 sm:w-full mobile:w-full mobilesm:w-full">
                            <img className="flex object-cover drop-shadow-xl rounded-3xl lg:w-10/12 md:w-10/12 sm:w-full mobile:w-full mobilesm:w-full" src={props.image} alt={props.title}/>
                        </div>
                    </div> 
                ) : (
                    <div className="flex flex-row-reverse space-y-14 lg:w-3/4 lg:self-start lg:flex-row-reverse md:self-center md:w-full md:flex-row-reverse sm:w-full sm:flex-col-reverse mobile:w-full mobile:flex-col-reverse mobilesm:flex-full mobilesm:flex-col-reverse">    
                        <div className="flex flex-row-reverse space-y-6 justify-center items-center text-pretty text-start text-red-700 lg:w-1/2 md:w-1/2 sm:w-full mobile:w-full mobilesm:w-full">
                            <div className="flex flex-col justify-center items-center text-pretty text-red-700">
                                <WiStars size={140} className="flex text-red-800"/>
                            </div>
                            <div className="flex flex-col">
                                <h1 
                                    className="flex text-red-800 font-bold text-pretty pb-3 mobilesm:text-xl mobile:text-xl md:text-2xl lg:text-2xl">
                                    {props.title}
                                </h1>
                                <p 
                                    className="flex text-red-800/90 font-light">
                                    {props.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:w-1/2 md:w-1/2 sm:w-full mobile:w-full mobilesm:w-full">
                            <img className="flex object-cover shadow-lg rounded-3xl lg:w-10/12 md:w-10/12 sm:w-full mobile:w-full mobilesm:w-full" src={props.image} alt={props.title}/>
                        </div>
                    </div> 
                )
            } 
        </>
    );
}