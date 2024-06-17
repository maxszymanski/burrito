import { useDispatch, useSelector } from 'react-redux'
import BucketButton from '../../ui/BasketButton'
import {
    addItem,
    decreaseItemQuantity,
    deleteItem,
    getCart,
    increaseItemQuantity,
} from '../cart/cartSlice'
import toast from 'react-hot-toast'
import QuantityButton from '../../ui/QuantityButton'
import AddRemoveBtn from '../../ui/AddRemoveBtn'
import { CartItemInterface } from '../../types/types'

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

    const cartItem: CartItemInterface[] = cart.filter(
        (item: { itemId: string }) => item.itemId === id
    )
    const isInCart = cartItem.length > 0

    function handleAddToCart() {
        const newItem = {
            itemId: id,
            name,
            quantity: 1,
            price,
            totalPrice: price * 1,
            image,
            ingredients,
        }
        dispatch(addItem(newItem))
        toast('Produkt dodany do koszyka')
    }
    function removeFromCart() {
        dispatch(deleteItem(cartItem[0].itemId))
        toast.error('Produkt usunięty z koszyka')
    }

    if (isOpen)
        return (
            <div className="flex items-center justify-between py-4 gap-3 px-4 my-4 rounded-2xl bg-[rgba(216,222,203,0.2)] min-h-[170px] xl:bg-transparent xl:flex-col xl:w-1/5 xl:my-0 xl:h-[350px] xl:gap-2 2xl:gap-3 2xl:h-[360px] 2xl:w-1/4">
                <img
                    src={image}
                    alt={`Obraz przedstawiający ${name}`}
                    className="h-auto max-w-[30%] small:max-w-[35%] max-h-28 xl:max-w-[70%] 2xl:max-h-32"
                />
                <div className="flex flex-col gap-2 small:pl-3 pl-1.5 xl:flex-1 xl:text-center  xl:pl-0 xl:justify-start">
                    <h4 className="font-semibold tracking-wider small:text-base text-sm leading-6 xl:text-xl xl:tracking-widest 2xl:text-2xl">
                        {name}
                    </h4>
                    <p className="text-[#FFF2E1]  small:text-sm text-xs leading-6 small:leading-7 tracking-widest xl:text-stone-300 ">
                        {ingredients}
                    </p>
                    <p className="font-semibold tracking-wider small:text-base text-sm xl:mt-auto xl:text-lg xl:pb-2 2xl:text-xl">
                        {price} zł
                    </p>
                </div>

                {isInCart ? (
                    <>
                        <QuantityButton
                            isCol
                            quantity={cartItem[0].quantity}
                            onClickInc={() => {
                                cartItem[0].quantity > 1
                                    ? dispatch(
                                          decreaseItemQuantity(
                                              cartItem[0].itemId
                                          )
                                      )
                                    : removeFromCart()
                            }}
                            onClickDec={() =>
                                dispatch(
                                    increaseItemQuantity(cartItem[0].itemId)
                                )
                            }
                        >
                            <p className="text-center font-muli">
                                {cartItem[0].quantity}
                            </p>
                        </QuantityButton>
                        <AddRemoveBtn
                            isMenu
                            quantity={cartItem[0].quantity}
                            onClickInc={() => {
                                cartItem[0].quantity > 1
                                    ? dispatch(
                                          decreaseItemQuantity(
                                              cartItem[0].itemId
                                          )
                                      )
                                    : removeFromCart()
                            }}
                            onClickDec={() =>
                                dispatch(
                                    increaseItemQuantity(cartItem[0].itemId)
                                )
                            }
                        />
                    </>
                ) : (
                    <BucketButton onClick={handleAddToCart} />
                )}
            </div>
        )
}

export default MenuCard
