import { Link } from 'react-router-dom'
import Loader from '../../ui/Loader'
import OrderCartHeader from './OrderCartHeader'
import CartStep from './CartStep'
import { useOrders } from '../orders/useOrders'
import { usePrice } from '../../context/usePrice'

function SuccessOrder() {
    const { orders, isLoading: isLoadingOrders } = useOrders()
    const { newOrderId } = usePrice()

    if (isLoadingOrders || !orders || orders.length === 0 || newOrderId === '')
        return <Loader />

    return (
        <section className=" px-4 py-6 small:px-6 text-center bg-menu-bg-sm lg:bg-none  xl:pt-44  lg:pt-16 lg:px-12 lg:container lg:mx-auto lg:max-w-[1000px]  h-screen  lg:overflow-y-auto lg:scrollbar-hide">
            <OrderCartHeader title="Zakończenie" to="/" />
            <CartStep one two three four />
            <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-2xl lg:text-3xl">
                    Dziękujemy za złożenie zamówienia
                </h2>
                <p className="text-yellow-500 py-8 text-3xl lg:text-5xl lg:py-12">
                    {' '}
                    #{newOrderId}
                </p>
                <p className="text-center mb-1 lg:text-lg">
                    Skorzystaj z powyższego numeru, aby śledzić status swojego
                    zamówienia.
                </p>
                <p className="mb-6 lg:text-lg">
                    Zachęcamy do regularnego sprawdzania, aby być na bieżąco z
                    postępem zamówienia.
                </p>

                <Link
                    to={`/order/${newOrderId}`}
                    className="text-yellow-500 p-2 text-xl lg:text-2xl duration-300 transition-colors hover:text-yellow-400"
                >
                    Zobacz zamówienie
                </Link>
                <p className="py-1 lg:text-lg">lub</p>
                <Link
                    to={'/menu'}
                    className="text-[rgb(219,216,216)] p-2 text-lg lg:text-xl duration-300 transition-colors hover:text-[rgb(180,178,178)]"
                >
                    Wróc do menu
                </Link>
            </div>
        </section>
    )
}

export default SuccessOrder
