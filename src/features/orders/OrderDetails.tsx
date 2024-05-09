import { useParams } from 'react-router-dom'
import { useUser } from '../authentication/useUser'
import Loader from '../../ui/Loader'
import SummaryOrderItem from '../cart/SummaryOrderItem'
import OrderCartHeader from '../cart/OrderCartHeader'

function OrderDetails() {
    const { orderNumber } = useParams()

    const { user, isLoading } = useUser()

    if (isLoading || !user) return <Loader />

    const { ordersHistory } = user.user_metadata

    const currentOrder = ordersHistory
        .filter((order) => order.orderId === orderNumber)
        .at(0)

    return (
        <section className=" px-4 py-6 small:px-6 text-center min-h-screenbg-menu-bg-sm">
            <OrderCartHeader
                title={`Zamówienie ${orderNumber}`}
                to="/ordersHistory"
            />

            <ul className="space-y-3 my-3 ">
                {currentOrder.cartOrder.map(
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
            <div className="flex items-center justify-between pt-8 px-4 font-semibold tracking-wider ">
                <p>Cena całkowita:</p>
                <p className="text-sm">{currentOrder.total} zł</p>
            </div>
            <div className="flex items-center justify-between pt-1  px-4 font-semibold tracking-wider ">
                <p>Status:</p>
                {currentOrder.total < 120 ? (
                    <p className="text-sm text-orange-400">W przygotowaniu</p>
                ) : (
                    <p className="text-sm text-red-500">Zakończony</p>
                )}
            </div>
        </section>
    )
}

export default OrderDetails
