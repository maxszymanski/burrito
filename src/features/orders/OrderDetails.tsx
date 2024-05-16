import { useParams } from 'react-router-dom'
import { useUser } from '../authentication/useUser'
import Loader from '../../ui/Loader'
import SummaryOrderItem from '../cart/SummaryOrderItem'
import OrderCartHeader from '../cart/OrderCartHeader'
import OrderRow from '../../ui/OrderRow'
import { useOrder } from './useOrder'

function OrderDetails() {
    const { order, isLoading, orderNumber } = useOrder()
    // const { user, isLoading } = useUser()
    if (isLoading || !order) return <Loader />
    // if (isLoading || !user) return <Loader />
    // const { ordersHistory } = user.user_metadata
    const { created_at, totalPrice, status } = order
    const createdDate = created_at.slice(0, 10).split('-').reverse().join('.')

    // const currentOrder = ordersHistory
    //     .filter((order) => order?.orderId === orderNumber)
    //     .at(0)

    return (
        <section className=" px-4 py-6 small:px-6 text-center min-h-screen bg-menu-bg-sm">
            <OrderCartHeader
                title={`Zamówienie #${orderNumber}`}
                to="/ordersHistory"
            />

            <ul className="space-y-3 my-3 pb-8  ">
                {order.cart.map(
                    (item: {
                        itemId: string
                        name: string
                        quantity: number
                        totalPrice: number
                        image: string
                        ingredients: string
                    }) => (
                        <SummaryOrderItem
                            item={item}
                            key={`${item.itemId}${name}`}
                        />
                    )
                )}
            </ul>
            <OrderRow>
                <p>Cena całkowita:</p>
                <p className="text-sm">{totalPrice} zł</p>
            </OrderRow>
            <OrderRow>
                <p>Data zamówienia:</p>
                <p className="text-sm">{createdDate}</p>
            </OrderRow>
            <OrderRow>
                <p>Status:</p>
                <p
                    className={`text-sm ${
                        status === 'W przygotowaniu'
                            ? 'text-orange-400'
                            : status === 'W drodze'
                            ? 'text-yellow-400'
                            : status === 'Zakończone'
                            ? 'text-red-500'
                            : ''
                    } `}
                >
                    {status}
                </p>
                {/* {order.total < 120 ? (
                    <p className="text-sm text-orange-400">W przygotowaniu</p>
                ) : (
                    <p className="text-sm text-red-500">Zakończony</p>
                )} */}
            </OrderRow>
        </section>
    )
}

export default OrderDetails
