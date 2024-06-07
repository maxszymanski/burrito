import { Link } from 'react-router-dom'

function CartLink() {
    return (
        <Link
            to="/summary"
            className="bg-yellow-500 w-full block rounded-sm py-2 text-xs small:text-base mb-3 text-center uppercase font-bold tracking-widest lg:w-1/5 "
        >
            Podsumowanie
        </Link>
    )
}

export default CartLink
