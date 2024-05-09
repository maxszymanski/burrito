import { Link } from 'react-router-dom'
import { usePrice } from '../../context/PriceContext'

function SummaryPayment() {
    const { paymentMethod } = usePrice()
    return (
        <div className="pt-5 small:pt-6 pb-32">
            <h4 className="text-2xl pb-2.5 border-b-[1px] border-yellow-500">
                Metoda płatności
            </h4>
            <p className="text-sm small:text-base leading-5 pb-1 my-4">
                {paymentMethod}
            </p>
            <Link
                to="/order"
                className="text-yellow-500 uppercase small:text-sm text-xs "
            >
                Zmień metodę płatności
            </Link>
        </div>
    )
}

export default SummaryPayment
