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
import NextLinkCart from '../../ui/NextLinkCart'

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
        <div className=" pb-28 px-4 py-6 small:px-6 lg:container lg:mx-auto lg:max-w-[1000px] xl:my-28  lg:bg-transparent lg:py-16 lg:px-12 ">
            <ClearCart
                onClose={toogleShowModal}
                refs={ref}
                showMore={showMore}
                onClear={() => dispatch(clearCart())}
            />
            <CartStep one />
            <CartList cart={cart} />
            <CartSummary />
            <NextLinkCart />
            <NavMenu noMobile={false} />
        </div>
    )
}

export default Cart
