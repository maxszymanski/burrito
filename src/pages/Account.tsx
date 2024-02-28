import { Outlet } from 'react-router-dom'
import NavMenu from '../ui/NavMenu'

function Account() {
    return (
        <div className="text-gray-950  font-muli w-full relative ">
            <Outlet />
            <NavMenu />
        </div>
    )
}

export default Account
