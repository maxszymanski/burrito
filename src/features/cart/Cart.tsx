import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'
import CartSummary from './CartSummary'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CartStep from './CartStep'
import ClearCart from './ClearCart'
import CartList from './CartList'
import NavMenu from '../../ui/NavMenu'

function Cart() {
    const [showMore, setShowMore] = useState(false)
    const cart = useSelector(getCart)
    const dispatch = useDispatch()

    function toogleShowModal() {
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
        return () => document.removeEventListener('click', handleClick)
    }, [])

    if (!cart?.length) return <EmptyCart />

    return (
        <div className=" pb-28 px-4 py-6 small:px-6">
            <ClearCart
                onClose={toogleShowModal}
                refs={ref}
                showMore={showMore}
                onClear={() => dispatch(clearCart())}
            />
            <CartStep one />
            <CartList cart={cart} />
            <CartSummary />
            <div className="mx-4 mt-2 pb-8">
                <Link
                    to="/order"
                    className="w-full mt-8 text-xl bg-[rgb(51,51,48)] py-3 rounded-xl text-white inline-block text-center"
                >
                    Dalej
                </Link>
            </div>
            <NavMenu />
        </div>
    )
}

export default Cart
