import { useSelector } from 'react-redux'
import {
    getTotalCardPrice,
    getTotalCartQuantity,
} from '../features/cart/cartSlice'
import { createContext, useContext, useState } from 'react'
import { useUser } from '../features/authentication/useUser'

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
    const clearOrderAddress = () => {
        setOrderAddress(defaultAdress)
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
                clearOrderAddress,
            }}
        >
            {children}
        </PriceContext.Provider>
    )
}

function usePrice() {
    const contexts = useContext(PriceContext)
    if (contexts === undefined)
        throw new Error('Price context został użyty poza providerem')
    return contexts
}

export { PriceProvider, usePrice }
