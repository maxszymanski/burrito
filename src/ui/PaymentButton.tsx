import { ReactNode } from 'react'
import { usePrice } from '../context/PriceContext'

function PaymentButton({
    value,
    src,
    alt,
    children,
}: {
    value: string
    src: string
    alt: string
    children: ReactNode
}) {
    const { handleSetPaymentMenthod } = usePrice()
    return (
        <button
            type="button"
            value={value}
            className="w-full border-[1px] border-[#c4c0c0] rounded-md py-1  px-6 text-sm text-left focus:border-yellow-500  focus:outline-none small:border-2 small:text-base flex items-center gap-6"
            onClick={handleSetPaymentMenthod}
        >
            <img
                src={src}
                alt={alt}
                className="w-10 h-auto max-h-10 small:w-12 small:h-12"
            />{' '}
            {children}
        </button>
    )
}

export default PaymentButton
