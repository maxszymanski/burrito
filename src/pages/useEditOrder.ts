import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateStatus } from '../services/apiOrders'
import toast from 'react-hot-toast'

export function useEditOrder() {
    const queryClient = useQueryClient()
    const { mutate: updateOrder, isPending: isEditing } = useMutation({
        mutationFn: (status: string) => updateStatus(status),
        onSuccess: () => {
            toast.success('Statsus zamówienia został zaaktualizowany')
            queryClient.invalidateQueries({
                queryKey: ['orders'],
            })
        },
        onError: (err) => toast.error(err.message),
    })
    return { isEditing, updateOrder }
}
