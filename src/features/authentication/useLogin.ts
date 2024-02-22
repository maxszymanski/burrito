import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Login as LoginApi } from '../../services/apiAuth'

function useLogin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => LoginApi({ email, password }),
        onSuccess: (user) => {
            console.log(user)
            queryClient.setQueryData(['user'], user.user)
            navigate('/menu', { replace: true })
        },
        onError: (err) => {
            console.log('Error', err)
        },
    })
    return { login, isLoading }
}
export default useLogin
