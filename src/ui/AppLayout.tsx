import { Outlet, useLocation } from 'react-router-dom'
import NavMenu from './NavMenu'
import { useEffect } from 'react'

function AppLayout() {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    return (
        <div className=" w-full relative bg-menu-bg-sm min-h-screen">
            <Outlet />
            <NavMenu />
        </div>
    )
}

export default AppLayout
