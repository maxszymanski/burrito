import Loader from '../../ui/Loader'
import OrderCartHeader from '../cart/OrderCartHeader'
import OrderItem from './OrderItem'
import { useOrders } from './useOrders'

function OrdersHistory() {
    const { orders, isLoading: isLoadingOrders } = useOrders()
    if (isLoadingOrders || !orders) return <Loader />

    return (
        <section className="px-4 py-6 small:px-6 text-center min-h-screen bg-menu-bg-sm text-mywhite pb-24 small:pb-32">
            <OrderCartHeader title="Historia Zamówień" to="/account" />
            <ul className=" flex flex-col justify-center space-y-2 pt-4 ">
                {orders.map((item: { orderId: string }, index: number) => (
                    <OrderItem
                        item={item}
                        key={item.id}
                        to={`/order/${item.id}`}
                        orderNumber={index + 1}
                    ></OrderItem>
                ))}
            </ul>
        </section>
    )
}

export default OrdersHistory
