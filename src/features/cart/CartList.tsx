import { useMemo } from 'react'
import CartItem from './CartItem'

function CartList({ cart }) {
    // użycie useMemo, aby uniknąć ponownego przeliczania, gdy dane cart się nie zmieniają
    const cartItems = useMemo(() => {
        return cart.map((item) => <CartItem item={item} key={item.itemId} />)
    }, [cart])

    return (
        <ul className="space-y-6 mt-5 divide-y-[1px] divide-yellow-500">
            {cartItems}
        </ul>
    )
}

export default CartList
