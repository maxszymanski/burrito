function AddRemoveBtn({ quantity, onClickInc, onClickDec, isMenu = false }) {
    return (
        <div
            className={` w-full border-2 rounded-full xl flex items-center justify-between font-scope px-2 border-[#EFB12A]  small:max-w-[140px] max-w-[120px] xl:max-w-[160px] ${
                isMenu ? 'hidden xl:flex mt-auto ' : ''
            }`}
        >
            <button
                className={`p-2 text-xl small:text-3xl font-frederick font-bold  xl:text-4xl hover:text-yellow-400 duration-300 transition-colors ${
                    isMenu ? 'xl:text-2xl xl:p-1.5' : ''
                }`}
                onClick={onClickInc}
            >
                -
            </button>
            <span className="text-lg small:text-xl font-bold xl:text-2xl mt-1.5">
                {quantity}
            </span>
            <button
                className={`p-2 text-xl small:text-3xl xl:text-4xl font-frederick font-bold  hover:text-yellow-400 duration-300 transition-colors ${
                    isMenu ? 'xl:text-2xl xl:p-1.5' : ''
                }`}
                onClick={onClickDec}
            >
                +
            </button>
        </div>
    )
}

export default AddRemoveBtn
