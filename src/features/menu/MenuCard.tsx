import { useDispatch, useSelector } from 'react-redux'
import BucketButton from '../../ui/BasketButton'
import {
    addItem,
    decreaseItemQuantity,
    getCart,
    increaseItemQuantity,
} from '../cart/cartSlice'
import toast from 'react-hot-toast'
import QuantityButton from '../../ui/QuantityButton'

function MenuCard({
    cardInfo = {
        name: '',
        ingredients: '',
        price: 0,
        image: '',
        id: '',
    },
    isOpen = false,
}) {
    const dispatch = useDispatch()
    const { name, ingredients, price, image, id } = cardInfo
    const cart = useSelector(getCart)

    const cartItem = cart.filter((item) => item.itemId === id)
    console.log(cartItem)
    const isInCart = cartItem.length > 0

    if (!cardInfo) return <p>Loading...</p>

    function handleAddToCart() {
        const newItem = {
            itemId: id,
            name,
            quantity: 1,
            price,
            totalPrice: price * 1,
            image,
        }
        dispatch(addItem(newItem))
        toast('Produkt dodany do koszyka')
    }

    if (isOpen)
        return (
            <div className="flex items-center justify-between py-4 gap-3 px-4 my-4 rounded-2xl bg-[rgba(216,222,203,0.2)] min-h-[170px]">
                <img
                    src={image}
                    alt=""
                    className="h-auto max-w-[30%] small:max-w-[35%] max-h-28"
                />
                <div className="flex flex-col gap-2 small:pl-3 pl-1.5 ">
                    <h4 className="font-semibold tracking-wider small:text-base text-sm leading-6">
                        {name}
                    </h4>
                    <p className="text-[#FFF2E1] small:text-sm text-xs leading-6 small:leading-7 tracking-widest ">
                        {ingredients}
                    </p>
                    <p className="font-semibold tracking-wider small:text-base text-sm">
                        {price} zł
                    </p>
                </div>
                {isInCart ? (
                    <QuantityButton
                        isCol={true}
                        quantity={cartItem[0].quantity}
                        onClickInc={() =>
                            dispatch(decreaseItemQuantity(cartItem[0].itemId))
                        }
                        onClickDec={() =>
                            dispatch(increaseItemQuantity(cartItem[0].itemId))
                        }
                    >
                        <p className="text-center font-muli">
                            {cartItem[0].quantity}
                        </p>
                    </QuantityButton>
                ) : (
                    <BucketButton onClick={handleAddToCart} />
                )}
            </div>
        )
}

export default MenuCard
