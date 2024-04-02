import { useNavigate } from 'react-router-dom'
import CartStep from './CartStep'
import DeliveryAdress from './DeliveryAdress'
import { IoMdArrowBack } from 'react-icons/io'
import SummaryButton from '../../ui/SummaryButton'
import PaymentButton from '../../ui/PaymentButton'

function OrderCart() {
    const navigate = useNavigate()
    return (
        <div className="relative pb-32">
            <div className="flex gap-8 items-center mb-4  text-2xl">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-300 p-1 mt-0.5"
                >
                    <IoMdArrowBack />
                </button>
                <h3>Dostawa i płatność</h3>
            </div>
            <CartStep one={true} two={true} />
            <DeliveryAdress />
            <div className="pt-5 small:pt-6">
                <h4 className="text-2xl pb-2 border-b-[1px] border-yellow-500">
                    Metoda płatności
                </h4>
                <div className="flex flex-col items-start mt-6 space-y-3 small:space-y-5 small:mt-9">
                    <PaymentButton
                        value="Gotówka"
                        alt="logo gotówki"
                        src="/money.svg"
                    >
                        Gotówka
                    </PaymentButton>
                    <PaymentButton
                        value="Karta płatnicza"
                        alt="Logo mastercard"
                        src="/mastercard.svg"
                    >
                        Karta Płatnicza
                    </PaymentButton>
                    <PaymentButton value="BLIK" alt="Logo blik" src="/blik.svg">
                        BLIK
                    </PaymentButton>
                </div>
            </div>
            <SummaryButton />
        </div>
    )
}

export default OrderCart
