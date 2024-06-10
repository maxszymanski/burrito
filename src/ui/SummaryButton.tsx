import { Link, useNavigate } from 'react-router-dom'
import { usePrice } from '../context/PriceContext'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from '../features/cart/cartSlice'
import { useUser } from '../features/authentication/useUser'
import { useCreateOrder } from '../features/orders/useCreateOrder'
import Loader from './Loader'
import { ANONYMOUS_USER_ID } from '../utils/helpers'
import CartButton from './CartButton'
import CartLink from './CartLink'

function SummaryButton({ isSummary = false }) {
    const cart = useSelector(getCart)
    const {
        total,
        discount,
        shipping,
        paymentMethod,
        clearPaymentMethod,
        orderAddress,
        clearOrderAddress,
        totalDiscount,
    } = usePrice()
    const { createOrder, isCreating } = useCreateOrder()
    const { user, isLoading, isAuthenticated } = useUser()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const totalRest = total % 1 === 0 ? '.00' : '0'
    const totalDiscountRest = totalDiscount % 1 === 0 ? '.00' : '0'
    if (isCreating || isLoading || (!user && isAuthenticated)) return <Loader />

    const getRandomId = () => {
        const length = 6
        let orderId
        do {
            orderId = Array.from({ length }, () =>
                Math.floor(Math.random() * 10)
            ).join('')
        } while (orderId.startsWith('0'))
        return orderId
    }

    function handleOrder() {
        const orderId = getRandomId()
        const UserId = user ? user.id : ANONYMOUS_USER_ID

        const newOrder = {
            cart,
            id: orderId,
            totalPrice: total,
            payment: paymentMethod,
            UserId,
            status: 'W przygotowaniu',
            address: orderAddress,
            totalDiscount,
        }
        if (!paymentMethod) {
            toast.error('Proszę wybrać metodę płatności')
            return
        }
        createOrder(newOrder, {
            onSuccess: () => {
                navigate('/success')
                dispatch(clearCart())
                clearPaymentMethod()
                localStorage.removeItem('deliveryData')
                clearOrderAddress()
            },
        })
    }

    return (
        <div className="fixed left-0 bottom-0 w-full border-t-[1px]  border-stone-700  p-2  text-sm px-6 bg-[#2c2c2b] lg:bg-menu-bg-big ">
            <div className="lg:flex lg:items-center lg:justify-center lg:container lg:mx-auto lg:max-w-5xl gap-x-20">
                <div className="flex justify-between mb-4 mt-1 small:text-lg lg:w-3/5 lg:justify-evenly ">
                    <p>Razem</p>
                    <div className="flex flex-col items-center ">
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
                    <CartButton onClick={handleOrder} text="zamawiam" />
                )}
                {paymentMethod && !isSummary && <CartLink />}
                {!paymentMethod && !isSummary && (
                    <CartButton
                        onClick={() =>
                            toast.error('Proszę wybrać metodę płatności')
                        }
                        text="Podsumowanie"
                    />
                )}
            </div>
        </div>
    )
}

export default SummaryButton
