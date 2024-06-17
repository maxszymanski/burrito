import { useSelector } from 'react-redux'
import { getCart } from './cartSlice'
import SummaryOrderItem from './SummaryOrderItem'
import { CartItemInterface } from '../../types/types'

function SummaryOrder() {
    const cart = useSelector(getCart)
    return (
        <div>
            <h4 className="text-2xl pb-2.5 border-b-[1px] border-yellow-500 lg:text-3xl pt-6">
                Zamówienie
            </h4>
            <ul className="space-y-3 my-3 lg:space-y-5">
                {cart.map((item: CartItemInterface) => (
                    <SummaryOrderItem item={item} key={item.itemId} />
                ))}
            </ul>
        </div>
    )
}

export default SummaryOrder
