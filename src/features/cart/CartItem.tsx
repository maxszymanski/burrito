function CartItem({ item }) {
    const { itemId, name, quantity, totalPrice } = item
    // console.log(item)
    return (
        <li className="flex items-center justify-between py-4 gap-3 px-4 my-4 rounded-2xl bg-[rgba(216,222,203,0.2)] text-mywhite font-muli">
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{totalPrice}zł</p>
            <p></p>
        </li>
    )
}

export default CartItem
