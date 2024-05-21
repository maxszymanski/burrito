import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../../services/apiOrders'
import { useUser } from '../authentication/useUser'
import { ANONYMOUS_USER_ID } from '../../utils/helpers'

export function useOrders() {
    const { user } = useUser()
    const userId = user ? user.id : ANONYMOUS_USER_ID
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
