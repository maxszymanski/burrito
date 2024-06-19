import PaymentButton from '../../ui/PaymentButton'

function PaymentMethod() {
    return (
        <div className="pt-5 small:pt-6 pb-32">
            <h4 className="text-2xl pb-2 border-b-[1px] border-yellow-500 lg:text-3xl">
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
                <PaymentButton
                    value="BLIK"
                    alt="Logo blik"
                    src="/images/blik.svg"
                >
                    BLIK
                </PaymentButton>
            </div>
        </div>
    )
}

export default PaymentMethod
