import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function OrderCartHeader() {
    const navigate = useNavigate()
    return (
        <div className="flex gap-8 items-center mb-4  text-2xl">
            <button
                onClick={() => navigate(-1)}
                className="text-gray-300 p-1 mt-0.5"
            >
                <IoMdArrowBack />
            </button>
            <h3>Dostawa i płatność</h3>
        </div>
    )
}

export default OrderCartHeader
