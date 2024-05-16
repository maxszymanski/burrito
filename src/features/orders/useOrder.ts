import { useQuery } from '@tanstack/react-query'
import { getOrder } from '../../services/apiOrders'
import { useParams } from 'react-router-dom'

export function useOrder() {
    const { orderNumber } = useParams()
    const {
        isLoading,
        error,
        data: order,
    } = useQuery({
        queryKey: ['orders', orderNumber],
        queryFn: () => getOrder(orderNumber),
    })
    return { isLoading, error, order, orderNumber }
}
