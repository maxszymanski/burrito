import Button from '../../ui/Button'
import useLogout from './useLogout'

function Logout() {
    const { logout, isLogingOut } = useLogout()

    return (
        <Button type="" onClick={logout} disabled={isLogingOut}>
            Wyloguj
        </Button>
    )
}

export default Logout
