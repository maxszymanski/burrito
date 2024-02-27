function Button({ onClick, children, type, disabled }) {
    return (
        <button
            className={`bg-yellow-500 rounded-lg text-mywhite  hover:bg-yellow-400 transition-colors duration-300 uppercase font-semibold text-sm small:text-xl pb-2 pt-3 tracking-widest font-scope hover:text-slate-100 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed ${type}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
