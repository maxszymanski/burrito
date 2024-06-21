import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import NavMenu from '../ui/NavMenu'
import { useUser } from '../features/authentication/useUser'
import { useEffect } from 'react'
import Loader from '../ui/Loader'

function Account() {
    const { isAuthenticated, isLoading } = useUser()
    const navigate = useNavigate()
    const location = useLocation()
    const contactPage = location.pathname === '/contact'

    useEffect(() => {
        if (isLoading) return
        if (!isAuthenticated && !contactPage) navigate('/login')
    }, [isAuthenticated, navigate, isLoading, contactPage])

    if (isLoading) return <Loader />
    return (
        <>
            <div className=" font-muli w-full min-h-screen relative lg:bg-account bg-account-small bg-center bg-cover   lg:overflow-y-auto xl:h-screen">
                <div className="sm:container sm:mx-auto sm:max-w-[500px] lg:max-w-[700px] ">
                    <Outlet />
                </div>
                <NavMenu noMobile={false} />
            </div>
        </>
    )
}

export default Account
