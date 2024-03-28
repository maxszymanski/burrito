import { useDispatch } from 'react-redux'
import {
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
} from './cartSlice'
import toast from 'react-hot-toast'
import QuantityButton from '../../ui/QuantityButton'

function CartItem({
    item,
}: {
    item: {
        name: string
        quantity: number
        totalPrice: number
        itemId: number
        image: string
    }
}) {
    const dispatch = useDispatch()
    const { name, quantity, totalPrice, image, itemId } = item

    return (
        <div className="flex items-center justify-evenly pt-6 ">
            <img
                src={image}
                alt=""
                className="h-auto max-w-[25%] max-h-28 rounded-full grow-0 basis-2/6"
            />
            <div className="flex flex-col gap-4 px-3 justify-between grow-0 basis-3/6  items-start">
                <h4 className="font-semibold tracking-wider  text-sm leading-6">
                    {name}
                </h4>
                <QuantityButton
                    quantity={quantity}
                    onClickInc={() => dispatch(decreaseItemQuantity(itemId))}
                    onClickDec={() => dispatch(increaseItemQuantity(itemId))}
                />
                <p className="font-semibold tracking-wider  text-sm">
                    ilość: <span className="text-yellow-500">{quantity}</span>
                </p>
            </div>
            <div className="flex flex-col justify-between self-stretch text-center  grow-0 basis-1/6">
                <p className="font-semibold tracking-wider  text-sm">
                    {totalPrice} zł
                </p>
                <button
                    className="text-yellow-500"
                    onClick={() => {
                        dispatch(deleteItem(itemId))
                        toast.error('Produkt usunięty z koszyka')
                    }}
                >
                    Usuń
                </button>
            </div>
        </div>
    )
}

export default CartItem
