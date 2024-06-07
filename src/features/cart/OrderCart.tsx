import CartStep from './CartStep'
import DeliveryAdress from './DeliveryAdress'
import SummaryButton from '../../ui/SummaryButton'
import PaymentMethod from './PaymentMethod'
import OrderCartHeader from './OrderCartHeader'
import { usePrice } from '../../context/PriceContext'
function OrderCart() {
    const { isFormShow } = usePrice()

    return (
        <section className="relative px-4 py-6 small:px-6 lg:container lg:mx-auto lg:max-w-[1000px] xl:my-28 lg:bg-[rgba(73,73,72,0.1)] lg:py-12 lg:px-12 lg:rounded-2xl">
            <OrderCartHeader title="Dostawa i płatność" />
            <CartStep one two />
            <DeliveryAdress />

            {!isFormShow && (
                <>
                    <PaymentMethod />
                    <SummaryButton />
                </>
            )}
        </section>
    )
}

export default OrderCart
