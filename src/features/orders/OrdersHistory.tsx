import { Link } from 'react-router-dom'
import Loader from '../../ui/Loader'
import { useUser } from '../authentication/useUser'
import OrderCartHeader from '../cart/OrderCartHeader'
import OrderItem from './OrderItem'

function OrdersHistory() {
    const { user, isLoading } = useUser()

    if (isLoading || !user) return <Loader />

    const { ordersHistory } = user.user_metadata

    return (
        <section className="px-4 py-6 small:px-6 text-center min-h-screen bg-menu-bg-sm text-mywhite pb-24 small:pb-32">
            <OrderCartHeader title="Historia Zamówień" to="/account" />
            <ul className=" flex flex-col justify-center space-y-2 pt-4 ">
                {ordersHistory.map(
                    (item: { orderId: string }, index: number) => (
                        <OrderItem
                            item={item}
                            key={item.orderId}
                            to={`/order/${item.orderId}`}
                            orderNumber={index + 1}
                        ></OrderItem>
                    )
                )}
            </ul>
        </section>
    )
}

export default OrdersHistory
