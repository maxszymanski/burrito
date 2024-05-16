import { Link, useNavigate } from 'react-router-dom'
import { usePrice } from '../context/PriceContext'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from '../features/cart/cartSlice'
import { useUser } from '../features/authentication/useUser'
import { useCreateOrder } from '../features/orders/useCreateOrder'
import Loader from './Loader'

function SummaryButton({ isSummary = false }) {
    const cart = useSelector(getCart)
    const { total, discount, shipping, paymentMethod, clearPaymentMethod } =
        usePrice()
    const { createOrder, isCreating } = useCreateOrder()
    const { user, isLoading } = useUser()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const shippingPriceToDiscount = shipping === 0 ? 5 : 0
    const totalDiscount = discount + shippingPriceToDiscount
    const totalRest = total % 1 === 0 ? '.00' : '0'
    const totalDiscountRest = totalDiscount % 1 === 0 ? '.00' : '0'
    if (isCreating || isLoading || !user) return <Loader />

    function handleOrder() {
        const length = 6
        const orderId = Array.from({ length }, () =>
            Math.floor(Math.random() * 10)
        ).join('')
        const UserId = user ? user.id : 'no-name'

        const newOrder = {
            cart,
            id: orderId,
            totalPrice: total,
            payment: paymentMethod,
            UserId,
            status: 'W przygotowaniu',
        }
        createOrder(newOrder, {
            onSuccess: () => {
                navigate('/success')
                dispatch(clearCart())
                clearPaymentMethod()
            },
        })
    }

    return (
        <div className="fixed left-0 bottom-0 w-full border-t-[1px]  border-stone-700  p-2   text-sm px-6 bg-[#2c2c2b]">
            <div className="flex justify-between mb-4 mt-1 small:text-lg">
                <p>Razem</p>
                <div className="flex flex-col items-end ">
                    <p>
                        {total}
                        {totalRest} zł
                    </p>
                    <p className="text-stone-400 text-xs">
                        oszczędzasz {totalDiscount}
                        {totalDiscountRest} zł
                    </p>
                </div>
            </div>
            {isSummary && (
                <button
                    className="bg-yellow-500 w-full block rounded-sm py-2 text-xs small:text-base mb-3 text-center uppercase font-bold tracking-widest"
                    onClick={handleOrder}
                >
                    zamawiam
                </button>
            )}
            {paymentMethod && !isSummary && (
                <Link
                    to="/summary"
                    className="bg-yellow-500 w-full block rounded-sm py-2 text-xs small:text-base mb-3 text-center uppercase font-bold tracking-widest"
                >
                    Podsumowanie
                </Link>
            )}
            {!paymentMethod && !isSummary && (
                <button
                    className="bg-yellow-500 w-full block rounded-sm py-2 text-xs small:text-base mb-3 text-center uppercase font-bold tracking-widest"
                    onClick={() =>
                        toast.error('Proszę wybrać metodę płatności')
                    }
                >
                    Podsumowanie
                </button>
            )}
        </div>
    )
}

export default SummaryButton
