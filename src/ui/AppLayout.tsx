import { Outlet, useLocation } from 'react-router-dom'
import NavMenu from './NavMenu'
import { useEffect } from 'react'

function AppLayout() {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className=" w-full relative bg-menu-bg-sm min-h-screen xl:bg-cover xl:bg-center xl:bg-menu xl:h-screen xl:overflow-y-auto ">
            <Outlet />
            <NavMenu noMobile={false} />
        </div>
    )
}

export default AppLayout
