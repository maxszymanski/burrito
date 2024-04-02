import { useSelector } from 'react-redux'
import {
    getTotalCardPrice,
    getTotalCartQuantity,
} from '../features/cart/cartSlice'
import { createContext, useContext } from 'react'

const PriceContext = createContext()

const PriceProvider = ({ children }) => {
    const totalCartQuantity = useSelector(getTotalCartQuantity)
    const totalCartPrice: number = useSelector(getTotalCardPrice)
    const shipping = totalCartPrice >= 60 ? 0 : 5
    const discount: number = +(totalCartPrice * 0.1).toFixed(2)
    const total = totalCartPrice + shipping - discount

    return (
        <PriceContext.Provider
            value={{
                totalCartQuantity,
                totalCartPrice,
                shipping,
                discount,
                total,
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
