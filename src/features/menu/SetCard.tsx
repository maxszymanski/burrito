import { useDispatch, useSelector } from 'react-redux'
import AddRemoveBtn from '../../ui/AddRemoveBtn'
import BasketButton from '../../ui/BasketButton'
import {
    addItem,
    decreaseItemQuantity,
    deleteItem,
    getCart,
    increaseItemQuantity,
} from '../cart/cartSlice'
import Loader from '../../ui/Loader'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { CartItemInterface, PopularItems } from '../../types/types'

function SetCard({
    isOverflow = true,
    title = '',
    itemOne = { name: '', price: 0, ingredients: '', id: 100 },
    itemTwo = { name: '', price: 0, ingredients: '', id: 100 },
    image = '',
    imageBig = '',
    isEnd = false,
}: PopularItems) {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const dispatch = useDispatch()
    const cart = useSelector(getCart)
    const idSet: string = (itemOne.id + itemTwo.id + 100).toString()
    const cartItem: CartItemInterface[] = cart.filter(
        (item: { itemId: string }) => item.itemId === idSet
    )
    const isInCart = cartItem.length > 0
    const ingredientsSet = [
        ...itemOne.ingredients.split(', '),
        ...itemTwo.ingredients.split(', '),
    ]
    const uniqeIngredients = [...new Set(ingredientsSet)].join(', ')

    const totalPriceSet = itemOne?.price + itemTwo?.price || 0

    useEffect(() => {
        const newImage = new Image()
        newImage.src = image
        newImage.onload = () => setIsImageLoaded(true)
    }, [image])

    if (!itemOne || !itemTwo || !isImageLoaded) return <Loader />

    function handleAddToCart() {
        const newItem = {
            itemId: idSet,
            name: title,
            quantity: 1,
            price: totalPriceSet,
            totalPrice: totalPriceSet * 1,
            image,
            ingredients: uniqeIngredients,
        }
        dispatch(addItem(newItem))
        toast('Produkt dodany do koszyka')
    }
    function removeFromCart() {
        dispatch(deleteItem(cartItem[0].itemId))
        toast.error('Produkt usunięty z koszyka')
    }

    return (
        <div
            className={` flex items-center justify-between px-6 sm:px-20 md:px-6 py-10 w-full transition-colors duration-300 text-mywhite md:rounded-[4rem] md:gap-x-5 max-w-[880px] 
			 ${
                 isOverflow
                     ? 'bg-[rgba(216,222,203,0.25)] '
                     : 'md:bg-[rgba(216,222,203,0.25)]  self-center'
             } ${isEnd ? 'self-end' : ''} `}
        >
            <div className="space-y-2 w-full md:space-y-4 ">
                <h3 className="text-lg small:text-xl pb-1 font-bold tracking-wide md:text-3xl ">
                    {title}
                </h3>
                <p className="text-base small:text-lg md:text-3xl">
                    {itemOne?.name}
                </p>
                <p className="text-lg tracking-widest leading-7 hidden md:block pr-5 text-[rgb(255,255,225,0.8)]">
                    ({itemOne?.ingredients})
                </p>
                <p className="text-base small:text-lg md:text-3xl">+</p>
                <p className="text-base small:text-lg md:text-3xl">
                    {itemTwo?.name}
                </p>
                <p className="text-lg tracking-widest leading-7 hidden md:block pr-5 text-[rgb(255,255,225,0.8)]">
                    ({itemTwo?.ingredients})
                </p>
                <p className="text-base small:text-lg md:text-3xl font-bold">
                    {totalPriceSet} zł
                </p>
                <div className="flex items-center justify-between gap-4 pt-4 sm:w-48 md:w-full">
                    {isInCart ? (
                        <AddRemoveBtn
                            isMenu={false}
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
                    ) : (
                        <BasketButton isMainPage onClick={handleAddToCart} />
                    )}
                </div>
            </div>
            <img
                src={image}
                alt="Zdjęcie zestawu dań z danej kategorii"
                className="h-auto max-w-[40%] small:max-w-full md:hidden"
            />
            <img
                src={imageBig}
                alt="Zdjęcie zestawu dań z danej kategorii"
                className="h-auto max-w-full md:block hidden"
            />
        </div>
    )
}

export default SetCard
