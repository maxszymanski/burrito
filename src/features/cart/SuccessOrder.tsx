import { Link } from 'react-router-dom'
import { useUser } from '../authentication/useUser'
import Loader from '../../ui/Loader'
import OrderCartHeader from './OrderCartHeader'
import CartStep from './CartStep'

function SuccessOrder() {
    const { user, isLoading } = useUser()

    const { ordersHistory } = user?.user_metadata || {
        ordersHistory: [],
    }
    if (isLoading || !user.user_metadata.ordersHistory) return <Loader />
    const newOrderID = ordersHistory[ordersHistory.length - 1].orderId

    return (
        <section className=" px-4 py-6 small:px-6 text-center min-h-screen bg-menu-bg-sm">
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
