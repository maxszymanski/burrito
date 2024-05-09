function QuantityButton({
    quantity,
    onClickInc,
    onClickDec,
    isCol = false,
    children,
}) {
    return (
        <div
            className={`w-full px-2 flex gap-3 ${
                isCol ? 'flex-col-reverse max-w-[50px] small:px-2.5' : ''
            }`}
        >
            <button
                className={` text-xl l font-frederick font-bold border-2   text-center px-1.5 rounded-xl ${
                    quantity <= 0
                        ? 'border-gray-500 text-gray-500'
                        : 'border-yellow-500'
                }`}
                onClick={onClickInc}
                disabled={quantity <= 0}
            >
                -
            </button>
            {children ? children : null}
            <button
                className=" text-xl  font-frederick font-bold border-2 border-yellow-500  text-center px-1.5 rounded-xl"
                onClick={onClickDec}
            >
                +
            </button>
        </div>
    )
}

export default QuantityButton
