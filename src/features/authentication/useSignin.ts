import { useMutation } from '@tanstack/react-query'
import { signUp as signUpApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

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
            toast('Link aktywacyjny został wysłany na podany adres email')
        },
        onError: (err) => {
            console.log(err)
            toast(
                'Wystąpił problem z rejestracją konta. Prosimy sptóbować ponownie'
            )
        },
    })
    return { signUp, isLoading }
}
