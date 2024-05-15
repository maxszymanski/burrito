import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createOrder } from '../../services/apiOrders'
import toast from 'react-hot-toast'

export function useCreateCabin() {
    const queryClient = useQueryClient()
    const { mutate: createOrder, isLoading: isCreating } = useMutation({
        mutationFn: createOrder,
        onSuccess: () => {
            toast.success('Zamówienie zostalo złożone')
            queryClient.invalidateQueries({
                // gdy funkcja dodawania się powiedzie nakazujemy wywołać invalidate dla queryKey: 'cabins i się odświeża
                queryKey: ['order'],
            })
        },
        onError: (err) => toast.error(err.message),
    })
    return { isCreating, createOrder }
}
