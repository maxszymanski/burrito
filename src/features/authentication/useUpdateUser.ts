import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { updateUser as updateCurrentUser } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'

export function useUpdateUser() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: updateUser, isLoading: isUpdating } = useMutation({
        mutationFn: ({ userName, street, zipCode, city, phone, avatar }) =>
            updateCurrentUser({
                userName,
                street,
                zipCode,
                city,
                phone,
                avatar,
            }),
        onSuccess: () => {
            toast.success('Profil został zaaktualizowany')
            queryClient.invalidateQueries({
                // gdy funkcja dodawania się powiedzie nakazujemy wywołać invalidate dla queryKey: 'user i się odświeża
                queryKey: ['user'],
            })
            navigate('/account')
            // queryClient.setQueryData(['user'], data?.user)
        },
        onError: (err) => toast.error(err.message),
    })
    return { isUpdating, updateUser }
}
