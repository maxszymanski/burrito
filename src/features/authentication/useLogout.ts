import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { logout as logoutApi } from '../../services/apiAuth'
import toast from 'react-hot-toast'
import { usePrice } from '../../context/usePrice'

function useLogout() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { setShipping, setDiscount } = usePrice()

    const { mutate: logout, isPending: isLogingOut } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries(), navigate('/', { replace: true })
            setShipping(5)
            setDiscount(0)
        },
        onError: () => {
            toast.error('Wystąpił błąd podczas wylogowywania')
        },
    })
    return { logout, isLogingOut }
}

export default useLogout
