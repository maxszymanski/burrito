import CartItem from './CartItem'

function CartList({ cart }) {
    return (
        <ul className="space-y-6 mt-5 divide-y-[1px] divide-yellow-500">
            {cart.map(
                (item: {
                    itemId: string
                    name: string
                    quantity: number
                    totalPrice: number
                    image: string
                }) => (
                    <CartItem item={item} key={item.itemId} />
                )
            )}
        </ul>
    )
}

export default CartList
