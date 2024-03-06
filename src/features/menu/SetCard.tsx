import { useState } from 'react'
import AddRemoveBtn from '../../ui/AddRemoveBtn'
import BasketButton from '../../ui/BasketButton'

function SetCard({
    isOverflow = true,
    title = '',
    itemOne = { name: '', price: 0, ingredients: '' },
    itemTwo = { name: '', price: 0, ingredients: '' },
    image = '',
    imageBig = '',
}) {
    const [quantity, setQuantity] = useState(1)
    console.log(itemOne)
    const handleOddOrder = () => {
        if (quantity <= 1) return
        setQuantity((num) => num - 1)
    }
    const handleAddOrder = () => {
        setQuantity((num) => num + 1)
    }
    const totalPrice = itemOne?.price + itemTwo?.price || 0

    const handleCreateOrder = () => {
        const newCard = {
            title,
            totalPrice,
            quantity,
        }
        console.log(newCard)
    }

    return (
        <div
            className={` flex items-center justify-between px-6 py-10 w-full text-mywhite md:rounded-3xl md:gap-x-5 max-w-[880px]
			 ${
                 isOverflow
                     ? 'bg-[rgba(216,222,203,0.2)]'
                     : 'md:bg-[rgba(216,222,203,0.2)]'
             }`}
        >
            <div className="space-y-2 w-full md:space-y-4 ">
                <h3 className="text-lg small:text-xl pb-1 font-bold tracking-wide md:text-3xl">
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
                    {totalPrice} zł
                </p>
                <div className="flex items-center justify-between gap-4 pt-4 sm:w-48 md:w-full">
                    <AddRemoveBtn
                        handleAddOrder={handleAddOrder}
                        quantity={quantity}
                        handleOddOrder={handleOddOrder}
                    />
                    <BasketButton onClick={handleCreateOrder} />
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
