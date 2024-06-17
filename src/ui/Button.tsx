import { ReactNode } from 'react'

interface Button {
    onClick?: () => void
    children: ReactNode
    type?: string
    disabled?: boolean
}

const Button: React.FC<Button> = ({
    onClick,
    children,
    type = '',
    disabled = false,
}) => {
    return (
        <button
            className={`${type} rounded-lg text-mywhite  hover:bg-yellow-400 transition-colors duration-300 uppercase font-semibold  small:text-xl pb-2 pt-3 tracking-widest font-scope hover:text-slate-100 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed bg-yellow-500 min-w-[160px] `}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button

// bg-yellow-500
