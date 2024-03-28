import { Link, useNavigate } from 'react-router-dom'
import CartStep from './CartStep'
import DeliveryAdress from './DeliveryAdress'
import { IoMdArrowBack } from 'react-icons/io'

function OrderCart() {
    const navigate = useNavigate()
    return (
        <div className="relative">
            <div className="flex gap-8 items-center mb-4  text-2xl">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-300 p-1 mt-0.5"
                >
                    <IoMdArrowBack />
                </button>
                <h2 className="">Dostawa i płatność</h2>
            </div>
            <CartStep one={true} two={true} />
            <DeliveryAdress />
            <div className="fixed left-0 bottom-0 w-full border-t-[1px]  border-stone-700  p-2   text-sm px-6 bg-[#2c2c2b]">
                <div className="flex justify-between mb-4 mt-1 small:text-lg">
                    <p>Razem</p>
                    <p>50zł</p>
                </div>
                <Link
                    to="/"
                    className="bg-yellow-500 w-full block rounded-sm py-2 text-xs small:text-base mb-3 text-center uppercase font-bold"
                >
                    Podsumowanie
                </Link>
            </div>
        </div>
    )
}

export default OrderCart
