import CartStep from './CartStep'
import DeliveryAdress from './DeliveryAdress'
import SummaryButton from '../../ui/SummaryButton'
import PaymentMethod from './PaymentMethod'
import OrderCartHeader from './OrderCartHeader'
import { usePrice } from '../../context/PriceContext'
function OrderCart() {
    const { isFormShow } = usePrice()

    return (
        <section className="relative px-4 py-6 small:px-6 lg:container lg:mx-auto lg:max-w-[900px] xl:pt-44  lg:bg-transparent lg:pt-16  lg:px-24 xl:h-screen ">
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
