import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { updateUser as updateCurrentUser } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'

export function useUpdateUser() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: updateUser, isPending: isUpdating } = useMutation({
        mutationFn: ({ userName, street, zipCode, city, phone, avatar }) =>
            updateCurrentUser({
                userName,
                street,
                zipCode,
                city,
                phone,
                avatar,
            }),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['user'],
            })
            await queryClient.refetchQueries({ queryKey: ['user'] })
            toast.success('Profil został zaaktualizowany')
            navigate('/account')
        },
        onError: (err) => toast.error(err.message),
    })

    return { isUpdating, updateUser }
}
