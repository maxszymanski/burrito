import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from '../../services/apiAuth'
import toast from 'react-hot-toast'

function useLogin() {
    const queryClient = useQueryClient()
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            toast.success(
                `Miło Cię znowu widzieć ${user.user.user_metadata.userName}`
            )
            queryClient.setQueryData(['user'], user.user)
        },
        onError: (err) => {
            console.log('Error', err)
            toast.error('Podany email lub hasło jest niepoprawne')
        },
    })
    return { login, isLoading }
}
export default useLogin
