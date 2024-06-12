function QuantityButton({
    quantity,
    onClickInc,
    onClickDec,
    isCol = false,
    children,
}) {
    return (
        <div
            className={`w-full px-2 flex gap-3 lg:gap-5 ${
                isCol
                    ? 'flex-col-reverse  small:px-2.5 max-w-[50px] md:max-w-[150px] md:items-center xl:hidden'
                    : ''
            }`}
        >
            <button
                className={` text-xl  font-frederick font-bold border-2   text-center px-1.5 rounded-xl lg:text-2xl lg:px-2 xl:text-3xl hover:bg-[rgba(225,225,225,0.3)] transition-colors duration-300 ${
                    quantity <= 0
                        ? 'border-gray-500 text-gray-500'
                        : 'border-yellow-500'
                }
                
                `}
                onClick={onClickInc}
                disabled={quantity <= 0}
            >
                -
            </button>
            {children ? children : null}
            <button
                className=" text-xl  font-frederick font-bold border-2 border-yellow-500  text-center px-1.5 rounded-xl lg:text-2xl xl:text-3xl lg:px-2 hover:bg-[rgba(225,225,225,0.1)] transition-colors duration-300"
                onClick={onClickDec}
            >
                +
            </button>
        </div>
    )
}

export default QuantityButton
