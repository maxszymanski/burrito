import { useSelector } from 'react-redux'
import {
    getTotalCardPrice,
    getTotalCartQuantity,
} from '../features/cart/cartSlice'
import { createContext, useContext, useState } from 'react'

const PriceContext = createContext()
const defaultAdress = {
    name: 'Anonimowy użytkownik',
    street: '',
    zip: '',
    city: '',
    phone: '',
}

const PriceProvider = ({ children }) => {
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [isFormShow, setIsFormShow] = useState(false)
    const [orderAddress, setOrderAddress] = useState(defaultAdress)
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
                setIsFormShow,
                orderAddress,
                setOrderAddress,
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
