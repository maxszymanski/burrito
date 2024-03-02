import { useMutation } from '@tanstack/react-query'
import { signUp as signUpApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'

export function useSignUp() {
    const navigate = useNavigate()
    const { mutate: signUp, isLoading } = useMutation({
        mutationFn: ({
            email,
            password,
            userName,
            street,
            zipCode,
            city,
            phone,
            orders,
        }) =>
            signUpApi({
                email,
                password,
                userName,
                street,
                zipCode,
                city,
                phone,
                orders,
            }),
        onSuccess: (user) => {
            navigate('/login')
        },
        onError: (err) => {
            console.log(err)
        },
    })
    return { signUp, isLoading }
}
