import { useContext } from 'react'
import { PriceContext } from './PriceContext'

function usePrice() {
    const contexts = useContext(PriceContext)
    if (contexts === undefined)
        throw new Error('Price context został użyty poza providerem')
    return contexts
}
export { usePrice }
