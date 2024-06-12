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
        <section className=" px-4 py-6 small:px-6 text-center min-h-screen  lg:container lg:mx-auto lg:max-w-[900px] xl:pt-44  lg:py-16 lg:px-24 ">
            <OrderCartHeader
                title={`Zamówienie #${orderNumber}`}
                to={isAuthenticated ? '/ordersHistory' : '/'}
            />

            <ul className="space-y-3 my-3 pb-8   lg:my-10 lg:space-y-8">
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
            <div className=" lg:p-6 lg:bg-[rgba(216,222,203,0.15)] lg:rounded-2xl xl:mx-12">
                <OrderRow isCol>
                    <p>Cena całkowita:</p>
                    <div className="flex flex-col items-end">
                        <p className="text-sm lg:text-base">
                            {totalPrice}
                            {totalRest} zł
                        </p>
                        <p className="text-stone-400 text-xs lg:text-sm lg:text-stone-300">
                            rabat {totalDiscount}
                            {totalDiscountRest} zł
                        </p>
                    </div>
                </OrderRow>
                <OrderRow>
                    <p>Data zamówienia:</p>
                    <p className="text-sm lg:text-base">{createdDate}</p>
                </OrderRow>
                <OrderRow>
                    <p>Status:</p>
                    <p
                        className={`text-sm lg:text-base ${
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
            </div>
        </section>
    )
}

export default OrderDetails
