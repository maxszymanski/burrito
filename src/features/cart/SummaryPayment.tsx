import { Link } from 'react-router-dom'
import { usePrice } from '../../context/usePrice'

function SummaryPayment() {
    const { paymentMethod } = usePrice()
    return (
        <div className="pt-5 small:pt-6 pb-32 lg:pb-20">
            <h4 className="text-2xl pb-2.5 border-b-[1px] border-yellow-500 lg:text-3xl">
                Metoda płatności
            </h4>
            <p className="text-sm small:text-base leading-5 pb-1 my-4 lg:text-xl lg:my-6">
                {paymentMethod}
            </p>
            <Link
                to="/order"
                className="text-yellow-500 uppercase small:text-sm text-xs lg:text-base hover:text-yellow-400 duration-300 transition-colors"
            >
                Zmień metodę płatności
            </Link>
        </div>
    )
}

export default SummaryPayment
