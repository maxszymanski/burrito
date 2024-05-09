import SummaryButton from '../../ui/SummaryButton'
import CartStep from './CartStep'
import DeliveryAdress from './DeliveryAdress'
import OrderCartHeader from './OrderCartHeader'
import SummaryOrder from './SummaryOrder'
import SummaryPayment from './SummaryPayment'

function Summary() {
    return (
        <section className="px-4 py-6 small:px-6">
            <OrderCartHeader title="Podsumowanie" to="/order" />
            <CartStep one={true} two={true} three={true} />
            <DeliveryAdress />
            <SummaryOrder />
            <SummaryPayment />
            <SummaryButton isSummary={true} />
        </section>
    )
}

export default Summary
