import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function OrderItem({ item, orderNumber }) {
    const { status } = item
    const createdDate = item.created_at
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('.')

    return (
        <li>
            <div className="flex items-center justify-around py-3 border-b-[1px] border-yellow-400 text-sm">
                <p>
                    Nr.{orderNumber}{' '}
                    <span className="text-yellow-400 ml-2">{item.id}</span>
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

                <Link
                    to={`/order/${item.id}`}
                    className="flex items-center gap-2 p-2"
                >
                    Więcej <FaArrowRight className="mt-0.5" />
                </Link>
            </div>
        </li>
    )
}

export default OrderItem
