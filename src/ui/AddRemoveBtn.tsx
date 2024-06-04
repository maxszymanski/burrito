function AddRemoveBtn({ quantity, onClickInc, onClickDec }) {
    return (
        <div className=" w-full border-2 rounded-full xl flex items-center justify-between font-scope px-2 border-[#EFB12A]  small:max-w-[140px] max-w-[120px] xl:max-w-[160px]">
            <button
                className="p-2 text-xl small:text-3xl font-frederick font-bold xl:p-3 xl:text-4xl"
                onClick={onClickInc}
            >
                -
            </button>
            <span className="text-lg small:text-xl font-bold xl:text-2xl">
                {quantity}
            </span>
            <button
                className="p-2 text-xl small:text-3xl xl:text-4xl font-frederick font-bold xl:p-3"
                onClick={onClickDec}
            >
                +
            </button>
        </div>
    )
}

export default AddRemoveBtn
