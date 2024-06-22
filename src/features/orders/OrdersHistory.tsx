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

    const sortedOrders = orders.slice().sort((a, b) => {
        if (b.created_at < a.created_at) return -1
        if (b.created_at > a.created_at) return 1
        return 0
    })

    const isHistoryOrder = orders.length != 0

    return (
        <section className="px-4 py-6 small:px-6 text-center min-h-screen  text-mywhite pb-24 small:pb-32  lg:py-40 lg:ml-16 2xl:ml-6 sm:pt-14 relative">
            <OrderCartHeader title="Historia Zamówień" to="/account" />
            {isHistoryOrder ? (
                <ul className=" flex flex-col justify-center space-y-2 pt-4  ">
                    {sortedOrders.map(
                        (item: {
                            id: string
                            status: string
                            created_at: string
                        }) => (
                            <OrderItem item={item} key={item.id}></OrderItem>
                        )
                    )}
                </ul>
            ) : (
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 small:text-xl lg:text-2xl xl:text-4xl xl:leading-[3rem]">
                    Nie masz jeszcze żadnych zamówień.
                </p>
            )}
        </section>
    )
}

export default OrdersHistory
