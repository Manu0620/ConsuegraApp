import Link from "next/link"

interface Props{
    href: string,
    text: string, 
    blank?: boolean
}

export const LinkFooter = (props: Props) => {
    return(
        <>
            {props.blank ? (
                <Link className='py-1 pl-3' href={props.href} target='_blank'>
                    {props.text}
                </Link>
            ): 
            (
                <Link className='py-1 pl-3' href={props.href}>
                    {props.text}
                </Link>
            )}
        </>
              
    );
}
