import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { passwordRecovery as passwordRecoveryApi } from '../../services/apiAuth'
import toast from 'react-hot-toast'

function usePasswordRecovery() {
    const navigate = useNavigate()
    const { mutate: passwordRecovery, isPending: isSending } = useMutation({
        mutationFn: (email: string) => passwordRecoveryApi(email),
        onSuccess: () => {
            toast.success(`Instrukcja została wysłana na podany adres email`)
            navigate('/login', { replace: true })
        },
        onError: (err) => {
            console.log('Error', err)
            toast.error('Podany email jest nieprawidłowy')
        },
    })
    return { passwordRecovery, isSending }
}
export default usePasswordRecovery
