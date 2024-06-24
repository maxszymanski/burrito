import { ReactElement, ReactNode } from 'react'

interface FormRow {
    label?: string
    error?: string
    children: ReactNode
}
const isReactElement = (node: ReactNode): node is ReactElement => {
    return node !== null && typeof node === 'object' && 'props' in node
}

const FormRow: React.FC<FormRow> = ({ label, children, error = '' }) => {
    return (
        <div className="text-sm small:text-base text-left  my-3 space-y-1 small:py-2  py-1 lg:text-lg xl:text-xl text-[rgb(255,255,255,0.8)] relative">
            {label && isReactElement(children) && (
                <label
                    className="font-bold px-8  text-yellow-500 "
                    htmlFor={children?.props?.id}
                >
                    {label}
                </label>
            )}
            {children}
            <p className="text-red-400 text-sm mt-3 mx-1 text-left ml-8 lg:text-base ">
                {error}
            </p>
        </div>
    )
}

export default FormRow
