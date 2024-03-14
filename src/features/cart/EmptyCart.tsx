import { Link } from 'react-router-dom'

function EmptyCart() {
    return (
        <div className="px-4 py-3 text-mywhite  flex flex-col items-center justify-center font-muli min-h-screen text-center">
            <p className=" font-bold text-3xl leading-9 ">
                Twój koszyk jest pusty.
            </p>
            <img src="/emptyCart.png" alt="" />
            <Link
                className=" px-4 py-3 text-center block border-2 border-yellow-100 rounded-lg text-yellow-100   transition-colors duration-300 uppercase font-semibold text-sm small:text-xl pb-2 pt-3 tracking-widest font-scope  focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed bg-[rgba(138,139,136,0.4)] hover:bg-[rgba(138,139,136,0.8)]"
                to="/menu"
            >
                Wróć do menu
            </Link>
        </div>
    )
}

export default EmptyCart
