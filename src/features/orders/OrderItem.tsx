import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function OrderItem({
    item,
}: {
    item: { status: string; created_at: string; id: string }
}) {
    const { status } = item
    const createdDate = item.created_at
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('.')

    return (
        <li>
            <Link
                to={`/order/${item.id}`}
                className="flex items-center justify-around py-3 border-b border-yellow-400 text-sm md:text-base xl:text-xl hover:mr-6 transition-all duration-300"
            >
                <p>
                    Nr.<span className="text-yellow-400 ml-1">{item.id}</span>
                </p>
                <p>{createdDate}</p>
                <div
                    className={`text-sm h-3 w-3 rounded-full ${
                        status === 'W przygotowaniu'
                            ? 'bg-lime-500'
                            : status === 'W drodze'
                            ? 'bg-orange-400'
                            : status === 'Zakończone'
                            ? 'bg-red-500'
                            : ''
                    } `}
                ></div>

                <p className="flex items-center gap-2 p-2 ">
                    Więcej <FaArrowRight className="mt-0.5" />
                </p>
            </Link>
        </li>
    )
}

export default OrderItem
