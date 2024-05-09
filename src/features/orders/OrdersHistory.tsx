import { Link } from 'react-router-dom'
import Loader from '../../ui/Loader'
import { useUser } from '../authentication/useUser'
import OrderCartHeader from '../cart/OrderCartHeader'

function OrdersHistory() {
    const { user, isLoading } = useUser()

    if (isLoading || !user) return <Loader />

    const { ordersHistory } = user.user_metadata
    console.log(user.user_metadata)

    return (
        <section className="px-4 py-6 small:px-6 text-center min-h-screen bg-menu-bg-sm text-mywhite pb-24 small:pb-32">
            <OrderCartHeader title="Historia Zamówień" to="/account" />
            <ul className=" flex flex-col justify-center space-y-2 pt-4 ">
                {ordersHistory.map((item: { orderId: string }, index) => (
                    <Link
                        to={`/order/${item.orderId}`}
                        className="flex items-center justify-between py-3 border-b-[1px] border-yellow-400"
                    >
                        <p>Zamówieni nr {index + 1}</p>
                        <p>{item.orderId}</p>
                    </Link>
                ))}
            </ul>
        </section>
    )
}

export default OrdersHistory
