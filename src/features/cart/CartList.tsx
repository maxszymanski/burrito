import { useMemo } from 'react'
import CartItem from './CartItem'

function CartList({ cart }: { cart: object[] }) {
    const cartItems = useMemo(() => {
        return cart.map((item) => <CartItem item={item} key={item.itemId} />)
    }, [cart])

    return (
        <ul className="space-y-6 mt-5 divide-y-[1px] divide-yellow-500 lg:space-y-0 lg:mb-24 lg:flex lg:flex-wrap lg:divide-y-0 justify-between lg:items-center  ">
            {cartItems}
        </ul>
    )
}

export default CartList
