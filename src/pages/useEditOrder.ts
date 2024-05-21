import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateStatus } from '../services/apiOrders'
import toast from 'react-hot-toast'

export function useEditOrder() {
    const queryClient = useQueryClient()
    const { mutate: updateOrder, isPending: isEditing } = useMutation({
        mutationFn: (status) => updateStatus(status),
        onSuccess: () => {
            toast.success('Statsus zamówienia został zaaktualizowany')
            queryClient.invalidateQueries({
                // gdy funkcja dodawania się powiedzie nakazujemy wywołać invalidate dla queryKey: 'cabins i się odświeża
                queryKey: ['orders'],
            })
        },
        onError: (err) => toast.error(err.message),
    })
    return { isEditing, updateOrder }
}
