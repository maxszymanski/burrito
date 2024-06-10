import { Link } from 'react-router-dom'
import Loader from '../../ui/Loader'
import OrderCartHeader from './OrderCartHeader'
import CartStep from './CartStep'
import { useOrders } from '../orders/useOrders'

function SuccessOrder() {
    const { orders, isLoading: isLoadingOrders } = useOrders()

    if (isLoadingOrders || !orders || orders.length === 0) return <Loader />

    const newOrderID = orders[orders.length - 1].id || '0'

    return (
        <section className=" px-4 py-6 small:px-6 text-center bg-menu-bg-sm lg:bg-none  xl:mt-28  lg:pt-16 lg:px-12 lg:container lg:mx-auto lg:max-w-[1000px]  min-h-screen  lg:min-h-full">
            <OrderCartHeader title="Zakończenie" to="/" />
            <CartStep one two three four />
            <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-2xl ">Dziękujemy za złożenie zamówienia</h2>
                <p className="text-yellow-500 py-8 text-3xl"> #{newOrderID}</p>
                <p className="text-center mb-1">
                    Skorzystaj z powyższego numeru, aby śledzić status swojego
                    zamówienia.
                </p>
                <p className="mb-6">
                    Zachęcamy do regularnego sprawdzania, aby być na bieżąco z
                    postępem zamówienia.
                </p>

                <Link
                    to={`/order/${newOrderID}`}
                    className="text-yellow-500 p-2 text-xl"
                >
                    Zobacz zamówienie
                </Link>
                <p className="py-1">lub</p>
                <Link to={'/menu'} className="text-[#dbd8d8] p-2 text-lg">
                    Wróc do menu
                </Link>
            </div>
        </section>
    )
}

export default SuccessOrder
