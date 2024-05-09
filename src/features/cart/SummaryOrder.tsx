import { useSelector } from 'react-redux'
import { getCart } from './cartSlice'
import SummaryOrderItem from './SummaryOrderItem'

function SummaryOrder() {
    const cart = useSelector(getCart)
    return (
        <div>
            <h4 className="text-2xl pb-2.5 border-b-[1px] border-yellow-500">
                Zamówienie
            </h4>
            <ul className="space-y-3 my-3 ">
                {cart.map(
                    (item: {
                        itemId: string
                        name: string
                        quantity: number
                        totalPrice: number
                        image: string
                        ingredients: string
                    }) => (
                        <SummaryOrderItem item={item} key={item.itemId} />
                    )
                )}
            </ul>
        </div>
    )
}

export default SummaryOrder
