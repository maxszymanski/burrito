import { useNavigate } from 'react-router-dom'
import Loader from '../../ui/Loader'
import { useUser } from '../authentication/useUser'
import OrderCartHeader from '../cart/OrderCartHeader'
import OrderItem from './OrderItem'
import { useOrders } from './useOrders'
import { useEffect } from 'react'

function OrdersHistory() {
    const { orders, isLoading: isLoadingOrders } = useOrders()
    const { isLoading, isAuthenticated } = useUser()
    const navigate = useNavigate()
    useEffect(() => {
        !isAuthenticated && navigate('/login')
    }, [isAuthenticated, navigate])
    if (isLoadingOrders || !orders || isLoading) return <Loader />

    return (
        <section className="px-4 py-6 small:px-6 text-center min-h-screen bg-menu-bg-sm text-mywhite pb-24 small:pb-32">
            <OrderCartHeader title="Historia Zamówień" to="/account" />
            {orders.length === 0 ? (
                <p>Nie masz żadnych zamówień</p>
            ) : (
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
            )}
        </section>
    )
}

export default OrdersHistory
