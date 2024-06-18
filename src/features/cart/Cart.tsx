import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'
import CartSummary from './CartSummary'
import { useEffect, useRef, useState } from 'react'
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

    const ref = useRef<HTMLButtonElement>(null)
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setShowMore(false)
            }
        }

        document.addEventListener('click', handleClick, true)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    if (!cart?.length) return <EmptyCart />

    return (
        <section className=" pb-28 px-4 py-6 small:px-6 lg:container lg:mx-auto lg:max-w-[900px] xl:pt-44 xl:pb-12 lg:bg-transparent lg:py-16 lg:px-24  lg:p-y0 lg:pt-16 ">
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
        </section>
    )
}

export default Cart
