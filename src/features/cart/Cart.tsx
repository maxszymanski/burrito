import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { getCart } from './cartSlice'
import EmptyCart from './EmptyCart'

function Cart() {
    const cart = useSelector(getCart)
    if (!cart.length) return <EmptyCart />
    const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0)

    return (
        <div className="px-4 py-6 text-mywhite font-muli">
            <ul>
                {cart.map((item) => (
                    <CartItem item={item} key={item.itemId} />
                ))}
            </ul>
            <div className="flex text-3xl items-center mt-6">
                <p className="mr-8">Suma:</p>
                <p>{totalPrice} zł</p>
            </div>
        </div>
    )
}

export default Cart
