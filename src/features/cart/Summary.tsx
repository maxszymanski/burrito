import { usePrice } from '../../context/usePrice'
import SummaryButton from '../../ui/SummaryButton'
import CartStep from './CartStep'
import DeliveryAdress from './DeliveryAdress'
import OrderCartHeader from './OrderCartHeader'
import SummaryOrder from './SummaryOrder'
import SummaryPayment from './SummaryPayment'

function Summary() {
    const { isFormShow } = usePrice()
    return (
        <section className="px-4 py-6 small:px-6 lg:container lg:mx-auto lg:max-w-[900px] xl:pt-44  lg:bg-transparent lg:pt-16 lg:px-24 ">
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
