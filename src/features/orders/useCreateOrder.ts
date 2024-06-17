import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createOrder as createOrderApi } from '../../services/apiOrders'
import toast from 'react-hot-toast'

export function useCreateOrder() {
    const queryClient = useQueryClient()
    const { mutate: createOrder, isPending: isCreating } = useMutation({
        mutationFn: createOrderApi,
        onSuccess: () => {
            toast.success('Zamówienie zostalo złożone')
            queryClient.invalidateQueries({
                queryKey: ['orders'],
            })
        },
        onError: (err) => toast.error(err.message),
    })
    return { isCreating, createOrder }
}
