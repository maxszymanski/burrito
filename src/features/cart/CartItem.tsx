import { useDispatch } from 'react-redux'
import {
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
} from './cartSlice'
import toast from 'react-hot-toast'
import QuantityButton from '../../ui/QuantityButton'
import { OrderDetailsType } from '../../types/types'

function CartItem({ item }: { item: OrderDetailsType }) {
    const dispatch = useDispatch()
    const { name, quantity, totalPrice, image, itemId } = item
    function removeFromCart() {
        dispatch(deleteItem(itemId))
        toast.error('Produkt usunięty z koszyka')
    }

    return (
        <li className="flex items-center justify-evenly pt-6 lg:pt-12 ">
            <img
                src={image}
                alt=""
                className="h-auto max-w-[18%] sm:max-w-[13%] md:max-w-[80px] lg:max-w-[15%] max-h-24 lg:max-h-28 xl:max-w-[14%] rounded-full grow-0 basis-2/6"
            />
            <div className="flex flex-col gap-4 px-3 justify-between grow-0 basis-3/6  items-start lg:gap-6">
                <h4 className="font-semibold tracking-wider  text-sm leading-6 lg:text-base xl:text-xl">
                    {name}
                </h4>
                <QuantityButton
                    isCol={false}
                    quantity={quantity}
                    onClickInc={() => {
                        quantity > 1
                            ? dispatch(decreaseItemQuantity(itemId))
                            : removeFromCart()
                    }}
                    onClickDec={() => dispatch(increaseItemQuantity(itemId))}
                >
                    {' '}
                </QuantityButton>
                <p className="font-semibold tracking-wider  text-sm lg:text-base">
                    ilość:{' '}
                    <span className="text-yellow-500 lg:text-base">
                        {quantity}
                    </span>
                </p>
            </div>
            <div className="flex flex-col justify-between self-stretch text-center  grow-0 basis-1/6">
                <p className="font-semibold tracking-wider  text-sm lg:text-base">
                    {totalPrice} zł
                </p>
                <button
                    className="text-yellow-500 lg:text-lg hover:text-yellow-400 transition-colors duration-300"
                    onClick={() => {
                        dispatch(deleteItem(itemId))
                        toast.error('Produkt usunięty z koszyka')
                    }}
                >
                    Usuń
                </button>
            </div>
        </li>
    )
}

export default CartItem
