import CartStep from './CartStep'
import DeliveryAdress from './DeliveryAdress'
import SummaryButton from '../../ui/SummaryButton'
import PaymentMethod from './PaymentMethod'
import OrderCartHeader from './OrderCartHeader'
import { usePrice } from '../../context/PriceContext'

function OrderCart() {
    const { isFormShow } = usePrice()
    return (
        <div className="relative px-4 py-6 small:px-6 ">
            <OrderCartHeader title="Dostawa i płatność" />
            <CartStep one={true} two={true} />
            <DeliveryAdress />
            {!isFormShow && (
                <>
                    <PaymentMethod />
                    <SummaryButton />
                </>
            )}
        </div>
    )
}

export default OrderCart
