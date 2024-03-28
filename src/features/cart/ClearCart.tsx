import { CiTrash } from 'react-icons/ci'
import { IoMdMore } from 'react-icons/io'

function ClearCart({ onClose, ref, showMore, onClear }) {
    return (
        <div className="flex items-center mb-2 justify-between text-xl">
            <h2>Twój koszyk</h2>
            <button className="p-2 text-2xl" onClick={onClose} ref={ref}>
                <IoMdMore />
            </button>
            <div
                className={`absolute top-[54px] right-10 bg-[rgb(32,32,27)] py-3 small:py-4 px-4 text-xs small:text-base animate-slide small:px-6  ${
                    showMore ? 'block' : 'hidden'
                }`}
            >
                <button
                    className="flex items-center gap-2 text-sm small:text-base"
                    onClick={onClear}
                >
                    <CiTrash /> Wyczyść koszyk
                </button>
            </div>
        </div>
    )
}

export default ClearCart
