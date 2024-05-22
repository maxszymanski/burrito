import { ReactNode } from 'react'

interface FormRow {
    label?: string
    error?: string
    children: ReactNode
}

const FormRow: React.FC<FormRow> = ({ label, children, error = '' }) => {
    return (
        <div className="text-sm small:text-base text-left  my-3 space-y-1 small:py-2 py-1  text-[rgb(255,255,255,0.8)] ">
            {label && (
                <label
                    className="font-bold px-8  text-yellow-500 "
                    htmlFor={children?.props?.id}
                >
                    {label}
                </label>
            )}
            {children}
            <span className="text-red-400 text-sm mt-3 mx-1 text-left">
                {error}
            </span>
        </div>
    )
}

export default FormRow
