import { useSelector } from 'react-redux'
import { getTotalCardPrice, getTotalCartQuantity } from './cartSlice'

function CartSummary() {
    const totalCartQuantity = useSelector(getTotalCartQuantity)
    const totalCartPrice: number = useSelector(getTotalCardPrice)
    const shipping = totalCartPrice >= 60 ? 0 : 5
    const discount: number = +(totalCartPrice * 0.1).toFixed(2)
    const total = totalCartPrice + shipping - discount
    if (!totalCartQuantity) return null
    return (
        <div className="font-muli mt-9 px-6 py-6 mx-4 rounded-2xl bg-[rgb(51,51,48)] space-y-1 ">
            <h4 className="pb-4 text-white">Twoje zamówienie</h4>
            <div className="flex items-center justify-between">
                <p>Suma</p>
                <p>{totalCartPrice} zł</p>
            </div>
            <div className="flex items-center justify-between">
                <p>Zniżka</p>
                <p>{discount} zł</p>
            </div>
            <div className="flex items-center justify-between">
                <p>Dostawa</p>
                <div className="flex items-center gap-1">
                    <p className="text-gray-500 line-through">5 zł</p>
                    <p>{shipping} zł</p>
                </div>
            </div>
            <div className="flex items-center justify-between pt-6 text-white">
                <p>Cena całkowita</p>
                <p>{total} zł</p>
            </div>
        </div>
    )
}

export default CartSummary
