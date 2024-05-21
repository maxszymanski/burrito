import { Outlet, useNavigate } from 'react-router-dom'
import NavMenu from '../ui/NavMenu'
import { useUser } from '../features/authentication/useUser'
import { useEffect } from 'react'

function Account() {
    const { isAuthenticated } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) navigate('/login')
    }, [isAuthenticated, navigate])

    return (
        <>
            <div className=" font-muli w-full min-h-screen relative">
                <Outlet />
                <NavMenu />
            </div>
        </>
    )
}

export default Account
