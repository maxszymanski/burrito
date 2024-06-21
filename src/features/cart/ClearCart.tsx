import { useEffect, useRef } from 'react'
import { CiTrash } from 'react-icons/ci'
import { IoMdMore } from 'react-icons/io'

interface ClearAllCart {
    onClose: () => void
    refs: React.MutableRefObject<HTMLButtonElement | null>
    showMore: boolean
    onClear: () => void
}

const ClearCart: React.FC<ClearAllCart> = ({
    onClose,
    refs,
    showMore,
    onClear,
}) => {
    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (refs.current && menuRef.current) {
            const rect = refs.current.getBoundingClientRect()
            menuRef.current.style.top = `${rect.bottom - 12}px`
            menuRef.current.style.left = `${rect.left - 155}px`
        }
    }, [showMore, refs])

    return (
        <div className="flex items-center mb-2 justify-between text-xl lg:text-2xl lg:mb-4  xl:text-4xl">
            <h2>Twój koszyk</h2>
            <button
                className="p-2 text-2xl hover:text-yellow-400 duration-300 transition-colors"
                onClick={onClose}
                ref={refs}
            >
                <IoMdMore />
            </button>
            <div
                ref={menuRef}
                className={`absolute  bg-[rgb(32,32,27)]  text-xs small:text-base animate-slide    ${
                    showMore ? 'block' : 'hidden'
                }`}
            >
                <button
                    className="flex items-center gap-2 py-3  px-4   text-base hover:text-yellow-400 duration-300 transition-colors"
                    onClick={onClear}
                >
                    <CiTrash /> Wyczyść koszyk
                </button>
            </div>
        </div>
    )
}

export default ClearCart
