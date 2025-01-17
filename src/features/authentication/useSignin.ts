import { useMutation } from '@tanstack/react-query'
import { signUp as signUpApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { NewUser } from '../../types/types'

export function useSignUp() {
    const navigate = useNavigate()
    const { mutate: signUp, isPending } = useMutation({
        mutationFn: ({
            email,
            password,
            userName,
            street,
            zipCode,
            city,
            phone,
            orders,
        }: NewUser) =>
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
        onSuccess: () => {
            navigate('/login')
            toast.success(
                'Link aktywacyjny został wysłany na podany adres email'
            )
        },
        onError: () => {
            toast.error(
                'Wystąpił problem z rejestracją konta. Prosimy spróbować ponownie lub użyć innego adresu email'
            )
        },
    })
    return { signUp, isPending }
}
