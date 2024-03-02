import { Outlet } from 'react-router-dom'
import NavMenu from '../ui/NavMenu'
import { useUser } from '../features/authentication/useUser'
import { useUpdateUser } from '../features/authentication/useUpdateUser'

function Account() {
    useUser()
    useUpdateUser()

    return (
        <>
            <div className=" font-muli w-full min-h-screen relative">
                <Outlet />
            </div>
            <NavMenu />
        </>
    )
}

export default Account
