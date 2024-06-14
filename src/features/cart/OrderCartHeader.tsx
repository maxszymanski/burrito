import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

function OrderCartHeader({ title = '', to = '/basket' }) {
    return (
        <div className="flex gap-8 items-center mb-4  text-2xl lg:text-3xl xl:text-4xl">
            <Link
                to={to}
                className="text-gray-300 p-1 mt-0.5 hover:bg-[rgb(255,255,255,0.1)] bg-transparent transition-colors duration-300 rounded-full"
            >
                <IoMdArrowBack />
            </Link>
            <h3>{title}</h3>
        </div>
    )
}

export default OrderCartHeader
