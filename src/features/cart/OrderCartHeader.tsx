import { IoMdArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'

function OrderCartHeader({ title = '', to = '/basket' }) {
    const navigate = useNavigate()
    return (
        <div className="flex gap-8 items-center mb-4  text-2xl">
            <Link
                to={to}
                // onClick={() => navigate(-1)}
                className="text-gray-300 p-1 mt-0.5"
            >
                <IoMdArrowBack />
            </Link>
            <h3>{title}</h3>
        </div>
    )
}

export default OrderCartHeader
