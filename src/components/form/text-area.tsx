
interface TextAreaProps {
    label?: string,
    type?: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    value?: string,
    name: string,
}

export const TextArea = (props: TextAreaProps) => {
  return (
    <>
        <span className="flex flex-col w-full">
            <label className="mx-4 my-2 w-full text-red-800">{props.label}</label>
            <textarea 
                onChange={props.onChange}
                className="block resize-none outline-none min-h-32 mx-2 p-4 text-[14px] text-red-800 border border-b-red-800 border-r-red-800 rounded-[15px] bg-gray-100" 
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                required />
        </span>
    </>
  )
}