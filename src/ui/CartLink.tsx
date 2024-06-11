import { Link } from 'react-router-dom'

function CartLink() {
    return (
        <Link
            to="/summary"
            className="bg-yellow-500 w-full block rounded-md py-2 text-xs small:text-base mb-3 text-center uppercase font-bold tracking-widest lg:w-1/5  transition-colors duration-300 hover:text-[rgb(34,34,34)]"
        >
            Podsumowanie
        </Link>
    )
}

export default CartLink
