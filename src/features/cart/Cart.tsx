import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { getCart } from './cartSlice'
import EmptyCart from './EmptyCart'

function Cart() {
    const cart = useSelector(getCart)

    if (!cart.length) return <EmptyCart />
    const totalPrice = cart.reduce(
        (acc: number, cur: { price: number }) => acc + cur.price,
        0
    )

    return (
        <div className="px-4 py-6 text-mywhite font-muli bg-[#2c2c2b] min-h-screen small:px-6">
            <h2 className=" text-center text-xl mb-4">Twój koszyk</h2>
            <div>
                <div className="space-x-1 flex">
                    <div className="bg-yellow-500 h-1 w-full"></div>
                    <div className="bg-[rgba(112,112,100,0.3)] h-1 w-full"></div>
                    <div className="bg-[rgba(112,112,100,0.3)] h-1 w-full"></div>
                    <div className="bg-[rgba(112,112,100,0.3)] h-1 w-full"></div>
                </div>
                <p className="text-end text-xs mt-2 text-[rgb(255,255,255,0.8)]">
                    Krok: <span>1</span>/4
                </p>
            </div>
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
            <div className="flex text-3xl items-center mt-6">
                <p className="mr-8">Suma:</p>
                <p>{totalPrice} zł</p>
            </div>
        </div>
    )
}

export default Cart
