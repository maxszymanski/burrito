import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createOrder as createOrderApi } from '../../services/apiOrders'
import toast from 'react-hot-toast'

export function useCreateOrder() {
    const queryClient = useQueryClient()
    const { mutate: createOrder, isLoading: isCreating } = useMutation({
        mutationFn: createOrderApi,
        onSuccess: () => {
            toast.success('Zamówienie zostalo złożone')
            queryClient.invalidateQueries({
                // gdy funkcja dodawania się powiedzie nakazujemy wywołać invalidate dla queryKey: 'cabins i się odświeża
                queryKey: ['orders'],
            })
        },
        onError: (err) => toast.error(err.message),
    })
    return { isCreating, createOrder }
}
