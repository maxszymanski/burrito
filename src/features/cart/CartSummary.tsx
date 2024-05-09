import { usePrice } from '../../context/PriceContext'

function CartSummary() {
    const { totalCartQuantity, totalCartPrice, shipping, discount, total } =
        usePrice()
    const totalCartPriceRest = totalCartPrice % 1 === 0 ? '.00' : '0'
    const discountRest = discount % 1 === 0 ? '.00' : '0'
    const totalRest = total % 1 === 0 ? '.00' : '0'
    if (!totalCartQuantity) return null
    return (
        <div className="font-muli mt-9 px-6 py-6 mx-4 rounded-2xl bg-[rgb(51,51,48)] space-y-1 ">
            <h4 className="pb-4 text-white">Twoje zamówienie</h4>
            <div className="flex items-center justify-between">
                <p>Suma</p>
                <p>
                    {totalCartPrice}
                    {totalCartPriceRest} zł
                </p>
            </div>
            <div className="flex items-center justify-between">
                <p>Zniżka</p>
                <p>
                    {discount}
                    {discountRest} zł
                </p>
            </div>
            <div className="flex items-center justify-between">
                <p>Dostawa</p>
                <div className="flex items-center gap-1">
                    {shipping != 5 && (
                        <p className="text-gray-400 line-through">5 zł</p>
                    )}
                    <p>{shipping},00 zł</p>
                </div>
            </div>
            <div className="flex items-center justify-between pt-6 text-white">
                <p>Cena całkowita</p>
                <p>
                    {total}
                    {totalRest} zł
                </p>
            </div>
        </div>
    )
}

export default CartSummary
