function SummaryOrderItem({
    item,
}: {
    item: {
        name: string
        quantity: number
        totalPrice: number
        itemId: number
        image: string
        ingredients: string
    }
}) {
    const { name, quantity, totalPrice, image, ingredients } = item

    return (
        <div className="flex items-center justify-evenly pt-6 ">
            <img
                src={image}
                alt=""
                className="h-auto max-w-[23%] max-h-24 lg:max-w-[17%] rounded-full grow-0 basis-2/6"
            />
            <div className="flex flex-col gap-2.5 px-3 justify-between grow-0 basis-3/6  items-start">
                <h4 className="font-semibold tracking-wider  text-sm leading-6 lg:text-lg xl:text-xl">
                    {name}
                </h4>
                <p className="text-xs text-start text-stone-400 lg:text-sm">
                    {ingredients}
                </p>
                <p className="font-semibold tracking-wider text-sm lg:text-base">
                    ilość: <span className="text-yellow-500">{quantity}</span>
                </p>
            </div>
            <div className="flex flex-col justify-center self-stretch text-center  grow-0 basis-1/6">
                <p className="font-semibold tracking-wider  text-sm lg:text-base">
                    {totalPrice} zł
                </p>
            </div>
        </div>
    )
}

export default SummaryOrderItem
