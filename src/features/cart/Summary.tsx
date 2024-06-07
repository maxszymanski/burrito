import { usePrice } from '../../context/PriceContext'
import SummaryButton from '../../ui/SummaryButton'
import CartStep from './CartStep'
import DeliveryAdress from './DeliveryAdress'
import OrderCartHeader from './OrderCartHeader'
import SummaryOrder from './SummaryOrder'
import SummaryPayment from './SummaryPayment'

function Summary() {
    const { isFormShow } = usePrice()
    return (
        <section className="px-4 py-6 small:px-6 lg:container lg:mx-auto lg:max-w-[1000px] xl:my-28 lg:bg-[rgba(73,73,72,0.1)] lg:py-12 lg:px-12 lg:rounded-2xl">
            <OrderCartHeader title="Podsumowanie" to="/order" />
            <CartStep one two three />
            <DeliveryAdress />
            {!isFormShow && (
                <>
                    <SummaryOrder />
                    <SummaryPayment />
                    <SummaryButton isSummary />
                </>
            )}
        </section>
    )
}

export default Summary
