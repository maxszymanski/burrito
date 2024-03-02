import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Login as LoginApi } from '../../services/apiAuth'
import toast from 'react-hot-toast'

function useLogin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => LoginApi({ email, password }),
        onSuccess: (user) => {
            toast.success(
                `Miło Cię znowu widzieć ${user.user.user_metadata.userName}`
            )
            queryClient.setQueryData(['user'], user.user)
            navigate('/menu', { replace: true })
        },
        onError: (err) => {
            console.log('Error', err)
            toast.error('Podany email lub hasło jest niepoprawne')
        },
    })
    return { login, isLoading }
}
export default useLogin
