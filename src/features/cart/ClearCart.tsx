import { CiTrash } from 'react-icons/ci'
import { IoMdMore } from 'react-icons/io'

interface ClearAllCart {
    onClose: () => void
    refs: React.MutableRefObject<HTMLButtonElement>
    showMore: boolean
    onClear: () => void
}

const ClearCart: React.FC<ClearAllCart> = ({
    onClose,
    refs,
    showMore,
    onClear,
}) => {
    return (
        <div className="flex items-center mb-2 justify-between text-xl lg:text-2xl lg:mb-4  xl:text-4xl">
            <h2>Twój koszyk</h2>
            <button className="p-2 text-2xl" onClick={onClose} ref={refs}>
                <IoMdMore />
            </button>
            <div
                className={`absolute top-[54px] right-10 bg-[rgb(32,32,27)] py-3 small:py-4 px-4 text-xs small:text-base animate-slide small:px-6 lg:top-[95px] lg:right-28 xl:top-[205px]  ${
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
