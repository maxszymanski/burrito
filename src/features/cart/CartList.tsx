import { useMemo } from 'react'
import CartItem from './CartItem'
import { CartItemInterface } from '../../types/types'

function CartList({ cart }: { cart: [] }) {
    const cartItems = useMemo(() => {
        return cart.map((item: CartItemInterface) => (
            <CartItem item={item} key={item.itemId} />
        ))
    }, [cart])

    return (
        <ul className="space-y-6 mt-5 divide-y-[1px] divide-yellow-500 lg:space-y-10 lg:mb-24 ">
            {cartItems}
        </ul>
    )
}

export default CartList
