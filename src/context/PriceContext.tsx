import { useSelector } from 'react-redux'
import {
    getTotalCardPrice,
    getTotalCartQuantity,
} from '../features/cart/cartSlice'
import { createContext, useContext, useState } from 'react'

const PriceContext = createContext()

const PriceProvider = ({ children }) => {
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [isFormShow, setIsFormShow] = useState(false)
    const totalCartQuantity = useSelector(getTotalCartQuantity)
    const totalCartPrice: number = useSelector(getTotalCardPrice)
    const shipping = totalCartPrice >= 60 ? 0 : 5
    const discount: number = +(totalCartPrice * 0.1).toFixed(2)
    const total = totalCartPrice + shipping - discount

    const handleSetPaymentMenthod = (e) => {
        setPaymentMethod(e.target.value)
    }
    const handleShowForm = () => {
        setIsFormShow((is) => !is)
    }
    const clearPaymentMethod = () => {
        setPaymentMethod(null)
    }

    return (
        <PriceContext.Provider
            value={{
                totalCartQuantity,
                totalCartPrice,
                shipping,
                discount,
                total,
                paymentMethod,
                handleSetPaymentMenthod,
                isFormShow,
                handleShowForm,
                clearPaymentMethod,
            }}
        >
            {children}
        </PriceContext.Provider>
    )
}

function usePrice() {
    const contexts = useContext(PriceContext)
    if (contexts === undefined)
        throw new Error('Price context was used outside Provider')
    return contexts
}

export { PriceProvider, usePrice }
