import { Outlet, useNavigate } from 'react-router-dom'
import NavMenu from '../ui/NavMenu'
import { useUser } from '../features/authentication/useUser'
import { useEffect } from 'react'
import Loader from '../ui/Loader'

function Account() {
    const { isAuthenticated, isLoading } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoading) return
        if (!isAuthenticated) navigate('/login')
    }, [isAuthenticated, navigate, isLoading])

    if (isLoading) return <Loader />
    return (
        <>
            <div className=" font-muli w-full min-h-screen relative lg:bg-account bg-account-small bg-center bg-cover 2xl:bg-accountBig  lg:overflow-y-auto">
                <div className="sm:container sm:mx-auto sm:max-w-[500px] lg:max-w-[700px] ">
                    <Outlet />
                </div>
                <NavMenu noMobile={false} />
            </div>
        </>
    )
}

export default Account
