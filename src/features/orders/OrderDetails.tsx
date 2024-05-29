import { useUser } from '../authentication/useUser'
import Loader from '../../ui/Loader'
import SummaryOrderItem from '../cart/SummaryOrderItem'
import OrderCartHeader from '../cart/OrderCartHeader'
import OrderRow from '../../ui/OrderRow'
import { useOrder } from './useOrder'
import OrderNotFound from './OrderNotFound'

function OrderDetails() {
    const { order, isLoading, orderNumber, error } = useOrder()
    const { isAuthenticated } = useUser()
    if (isLoading) return <Loader />
    if (!order) return <OrderNotFound />
    const { created_at, totalPrice, status, totalDiscount } = order
    const createdDate = created_at.slice(0, 10).split('-').reverse().join('.')
    const totalRest = totalPrice % 1 === 0 ? '.00' : '0'
    const totalDiscountRest = totalDiscount % 1 === 0 ? '.00' : '0'

    return (
        <section className=" px-4 py-6 small:px-6 text-center min-h-screen bg-menu-bg-sm">
            <OrderCartHeader
                title={`Zamówienie #${orderNumber}`}
                to={isAuthenticated ? '/ordersHistory' : '/'}
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
            <div></div>

            <OrderRow isCol>
                <p>Cena całkowita:</p>
                <div className="flex flex-col items-end">
                    <p className="text-sm">
                        {totalPrice}
                        {totalRest} zł
                    </p>
                    <p className="text-stone-400 text-xs">
                        rabat {totalDiscount}
                        {totalDiscountRest} zł
                    </p>
                </div>
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
                            ? 'text-lime-500'
                            : status === 'W drodze'
                            ? 'text-orange-400'
                            : status === 'Zakończone'
                            ? 'text-red-500'
                            : ''
                    } `}
                >
                    {status}
                </p>
            </OrderRow>
        </section>
    )
}

export default OrderDetails
