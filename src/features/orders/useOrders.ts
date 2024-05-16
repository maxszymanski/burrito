import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../../services/apiOrders'
import { useUser } from '../authentication/useUser'

export function useOrders() {
    const { user } = useUser()
    const userId = user ? user.id : 'no-name'
    const {
        isLoading,
        error,
        data: orders,
    } = useQuery({
        queryKey: ['orders', userId],
        queryFn: () => getOrders(userId),
    })
    return { isLoading, error, orders }
}
