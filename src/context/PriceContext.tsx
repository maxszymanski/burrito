import { useSelector } from 'react-redux'
import {
    getTotalCardPrice,
    getTotalCartQuantity,
} from '../features/cart/cartSlice'
import { createContext, useEffect, useState } from 'react'
import { useUser } from '../features/authentication/useUser'
import { useOrders } from '../features/orders/useOrders'
import { Address } from '../types/types'

interface Price {
    children: React.ReactNode
}

interface PriceContextType {
    totalCartQuantity: number
    totalCartPrice: number
    shipping: number
    discount: number
    total: number
    paymentMethod: string
    handleSetPaymentMenthod: (value: string) => void
    isFormShow: boolean
    handleShowForm: () => void
    clearPaymentMethod: () => void
    setIsFormShow: React.Dispatch<React.SetStateAction<boolean>>
    orderAddress: Address
    setOrderAddress: React.Dispatch<React.SetStateAction<Address>>
    clearOrderAddress: () => void
    totalDiscount: number
    setShipping: React.Dispatch<React.SetStateAction<number>>
    setDiscount: React.Dispatch<React.SetStateAction<number>>
}

const PriceContext = createContext<PriceContextType | undefined>(undefined)
const defaultAdress: Address = {
    name: 'Anonim',
    street: '',
    zip: '',
    city: '',
    phone: '',
}

const PriceProvider: React.FC<Price> = ({ children }) => {
    const { isAuthenticated } = useUser()
    const { orders } = useOrders()
    const [paymentMethod, setPaymentMethod] = useState(() => {
        const storedPaymentMethod = localStorage.getItem('paymentMethod')
        return storedPaymentMethod ? JSON.parse(storedPaymentMethod) : null
    })
    const [isFormShow, setIsFormShow] = useState(false)
    const [orderAddress, setOrderAddress] = useState(defaultAdress)
    const totalCartQuantity = useSelector(getTotalCartQuantity)
    const totalCartPrice: number = useSelector(getTotalCardPrice)
    const [shipping, setShipping] = useState(5)
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)

    const totalDiscount = (shipping === 0 ? 5 : 0) + discount

    useEffect(() => {
        setShipping(isAuthenticated ? 0 : 5)
    }, [isAuthenticated, setShipping])

    useEffect(() => {
        if (isAuthenticated && orders && orders.length > 10)
            setDiscount(+(totalCartPrice * 0.1).toFixed(2))
    }, [setDiscount, isAuthenticated, totalCartPrice, orders])

    useEffect(() => {
        setTotal(totalCartPrice + shipping - discount)
    }, [totalCartPrice, shipping, discount])

    const handleSetPaymentMenthod = (value: string) => {
        localStorage.setItem('paymentMethod', JSON.stringify(value))
        setPaymentMethod(value)
    }
    const handleShowForm = () => {
        setIsFormShow((is) => !is)
    }
    const clearPaymentMethod = () => {
        setPaymentMethod(null)
        localStorage.removeItem('paymentMethod')
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
                totalDiscount,
                setShipping,
                setDiscount,
            }}
        >
            {children}
        </PriceContext.Provider>
    )
}

export { PriceProvider, PriceContext }
