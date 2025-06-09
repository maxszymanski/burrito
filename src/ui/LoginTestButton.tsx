interface LoginTestButtonProps {
    onClick: () => void
}

function LoginTestButton({ onClick }: LoginTestButtonProps) {
    return (
        <button
            type="button"
            className={`w-full mt-6 rounded-lg text-mywhite  hover:bg-yellow-400 transition-colors duration-300 uppercase font-semibold  small:text-xl pb-2 pt-3 tracking-widest font-scope hover:text-slate-100 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed bg-yellow-500 min-w-[160px] `}
            onClick={onClick}
        >
            Konto testowe
        </button>
    )
}

export default LoginTestButton
