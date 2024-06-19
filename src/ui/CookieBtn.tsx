import { usePrice } from '../context/usePrice'

const CookieBtn = () => {
    const { closeCookieModal } = usePrice()
    return (
        <button
            className="rounded-lg text-mywhite  hover:bg-yellow-400 transition-colors duration-300 uppercase font-semibold   pb-2 pt-3 px-3 tracking-widest font-scope hover:text-slate-100 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2  bg-yellow-500 lg:px-6"
            onClick={closeCookieModal}
        >
            Akceptuj
        </button>
    )
}

export default CookieBtn
