import { Link } from 'react-router-dom'

function EmptyCart() {
    return (
        <div className="px-4 py-3 text-mywhite  flex flex-col items-center justify-center font-muli min-h-screen text-center bg-gradient-to-b from-[#9A1E02] to-[#eeb02a]">
            <p className=" font-bold text-3xl leading-9 text-mywhite ">
                Twój koszyk jest pusty.
            </p>
            <img src="/emptyCart.png" alt="pusty koszyk na zakupy" />
            <Link
                className=" px-4 py-3 text-center block border-2 border-[rgb(44,44,43)] rounded-lg text-mywhite   transition-colors duration-300 uppercase font-semibold text-sm small:text-xl pb-2 pt-3 tracking-widest font-scope  focus:bg-[rgb(37,37,36)] focus:outline-none focus:ring focus:ring-[rgb(44,44,43)] focus:ring-offset-2 disabled:cursor-not-allowed bg-[rgb(44,44,43)] hover:bg-[rgba(44,44,43,0.8)]"
                to="/menu"
            >
                Wróć do menu
            </Link>
        </div>
    )
}

export default EmptyCart
