import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function OrderItem({ to, item, orderNumber, orderDate }) {
    return (
        <li>
            <div className="flex items-center justify-between py-3 border-b-[1px] border-yellow-400 text-sm">
                <p>
                    Nr.{orderNumber}{' '}
                    <span className="text-yellow-400 ml-2">{item.orderId}</span>
                </p>
                <p>{item.createdDate}</p>
                <Link
                    to={`/order/${item.orderId}`}
                    className="flex items-center gap-2 p-2"
                >
                    Więcej <FaArrowRight className="mt-0.5" />
                </Link>
            </div>
        </li>
    )
}

export default OrderItem
