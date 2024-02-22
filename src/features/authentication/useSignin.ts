import { useMutation } from '@tanstack/react-query'
import { signUp as signUpApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'

export function useSignUp() {
    const navigate = useNavigate()
    const { mutate: signUp, isLoading } = useMutation({
        mutationFn: ({ email, password, userName }) =>
            signUpApi({ email, password, userName }),
        onSuccess: (user) => {
            console.log(user)
            navigate('/login')
        },
        onError: (err) => {
            console.log(err)
        },
    })
    return { signUp, isLoading }
}
