import { Link } from 'react-router-dom'
import { usePrice } from '../context/PriceContext'

function SummaryButton() {
    const { total } = usePrice()
    return (
        <div className="fixed left-0 bottom-0 w-full border-t-[1px]  border-stone-700  p-2   text-sm px-6 bg-[#2c2c2b]">
            <div className="flex justify-between mb-4 mt-1 small:text-lg">
                <p>Razem</p>
                <p>{total} zł</p>
            </div>
            <Link
                to="/"
                className="bg-yellow-500 w-full block rounded-sm py-2 text-xs small:text-base mb-3 text-center uppercase font-bold tracking-widest"
            >
                Podsumowanie
            </Link>
        </div>
    )
}

export default SummaryButton
