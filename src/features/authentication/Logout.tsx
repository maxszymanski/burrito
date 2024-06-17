import Button from '../../ui/Button'
import Spinner from '../../ui/Spinner'
import useLogout from './useLogout'

function Logout() {
    const { logout, isLogingOut } = useLogout()

    return (
        <Button type="px-4 " onClick={logout} disabled={isLogingOut}>
            {isLogingOut ? <Spinner /> : 'Wyloguj'}
        </Button>
    )
}

export default Logout
