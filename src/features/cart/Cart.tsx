import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'
import CartSummary from './CartSummary'
import { IoMdMore } from 'react-icons/io'
import { useEffect, useRef, useState } from 'react'
import { CiTrash } from 'react-icons/ci'

function Cart() {
    const [showMore, setShowMore] = useState(false)
    const cart = useSelector(getCart)
    const dispatch = useDispatch()

    function handleCloseModal() {
        setShowMore((isOpen) => !isOpen)
    }

    const ref = useRef()
    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setShowMore(false)
            }
        }

        document.addEventListener('click', handleClick, true) // dodajemy na koncu true i wtedy addEven nie działa do gory tylko w dól i nasłuchuje tylko jesli modal jest otwarty
        return () => document.removeEventListener('click', handleClick, true)
    }, [setShowMore])

    if (!cart?.length) return <EmptyCart />

    return (
        <div className="px-4 py-6 text-mywhite font-muli bg-[#2c2c2b] min-h-screen small:px-6 pb-28">
            <div className="flex items-center mb-2 justify-between text-xl">
                <h2>Twój koszyk</h2>
                <button
                    className="p-2 text-2xl"
                    onClick={handleCloseModal}
                    ref={ref}
                >
                    <IoMdMore />
                </button>
                <div
                    className={`absolute top-[54px] right-10 bg-[rgb(32,32,27)] py-3 small:py-4 px-4 text-xs small:text-base animate-slide small:px-6  ${
                        showMore ? 'block' : 'hidden'
                    }`}
                >
                    <button
                        className="flex items-center gap-2 text-sm small:text-base"
                        onClick={() => dispatch(clearCart())}
                    >
                        <CiTrash /> Wyczyść koszyk
                    </button>
                </div>
            </div>
            <div>
                <div className="space-x-1 flex">
                    <div className="bg-yellow-500 h-1 w-full"></div>
                    <div className="bg-[rgba(112,112,100,0.3)] h-1 w-full"></div>
                    <div className="bg-[rgba(112,112,100,0.3)] h-1 w-full"></div>
                </div>
                <p className="text-end text-xs mt-2 text-[rgb(255,255,255,0.8)]">
                    Krok: 1/3
                </p>
            </div>
            <ul className="space-y-6 mt-5 divide-y-[1px] divide-yellow-500">
                {cart.map(
                    (item: {
                        itemId: string
                        name: string
                        quantity: number
                        totalPrice: number
                        image: string
                    }) => (
                        <CartItem item={item} key={item.itemId} />
                    )
                )}
            </ul>
            <CartSummary />
            <div className="mx-4 mt-2 pb-8">
                <button className="w-full mt-8 text-xl bg-[rgb(51,51,48)] py-3 rounded-xl text-white">
                    Dalej
                </button>
            </div>
        </div>
    )
}

export default Cart
