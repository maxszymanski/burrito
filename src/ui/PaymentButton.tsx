import { ReactNode } from 'react'
import { usePrice } from '../context/usePrice'

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
    const { handleSetPaymentMenthod, paymentMethod } = usePrice()
    return (
        <button
            type="button"
            value={value}
            className={`w-full border-[1px] border-[#c4c0c0] rounded-md py-1  px-6 text-sm text-left  focus:outline-none small:border-2 small:text-base flex items-center gap-6 lg:text-lg hover:bg-[rgb(255,255,255,0.1)] transition-colors duration-300 ${
                paymentMethod === value ? 'border-yellow-500' : ''
            }`}
            onClick={(e) =>
                handleSetPaymentMenthod((e.target as HTMLButtonElement).value)
            }
        >
            <img
                src={src}
                alt={alt}
                className="w-10 h-8  small:h-10 lg:w-12 lg:h-12"
            />{' '}
            {children}
        </button>
    )
}

export default PaymentButton
