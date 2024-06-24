import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { updatePassword as updateUserPassword } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'

export function useUpdatePassword() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: updatePassword, isPending: isUpdating } = useMutation({
        mutationFn: (password: string) =>
            updateUserPassword({
                password,
            }),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['user'],
            })
            await queryClient.refetchQueries({ queryKey: ['user'] })
            toast.success('Hasło zostało zmienione')
            navigate('/account')
        },
        onError: (err) => toast.error(err.message),
    })

    return { isUpdating, updatePassword }
}
