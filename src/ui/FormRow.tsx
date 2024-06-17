import { ReactNode } from 'react'

interface FormRow {
    label?: string
    error?: string
    children: ReactNode
}

const FormRow: React.FC<FormRow> = ({ label, children, error }) => {
    return (
        <div className="mb-3 flex flex-col relative ">
            {label && <label htmlFor={children?.props?.id}>{label}</label>}
            {children}
            <span className="text-red-400 text-sm mt-3 mx-1 text-left font-scope">
                {error}
            </span>
        </div>
    )
}

export default FormRow
