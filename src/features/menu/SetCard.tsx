import AddRemoveBtn from '../../ui/AddRemoveBtn'
import BasketButton from '../../ui/BasketButton'

function SetCard({
    isOverflow = true,
    title = '',
    itemOne = { name: '', price: 0 },
    itemTwo = { name: '', price: 0 },
}) {
    const price = itemOne?.price + itemTwo?.price || 0
    return (
        <div
            className={` flex items-center justify-between px-6 py-10 w-full text-mywhite
			 ${isOverflow ? 'bg-[rgba(216,222,203,0.2)]' : ''}`}
        >
            <div className="space-y-2 w-full">
                <h3 className="text-lg small:text-xl pb-1 font-bold tracking-wide">
                    {title}
                </h3>
                <p className="text-base small:text-lg">{itemOne?.name}</p>
                <p className="text-base small:text-lg">+</p>
                <p className="text-base small:text-lg">{itemTwo?.name}</p>
                <p className="text-base small:text-lg">{price} zł</p>
                <div className="flex items-center justify-between gap-4 pt-4 sm:w-48 ">
                    <AddRemoveBtn />
                    <BasketButton />
                </div>
            </div>
            <img
                src="./doubleChicken.png"
                alt=""
                className="h-auto max-w-[40%] small:max-w-full"
            />
        </div>
    )
}

export default SetCard
