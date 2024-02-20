import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Logo from './Logo'
import NavMenu from './NavMenu'
import { useEffect } from 'react'

function AppLayout() {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    return (
        <div className=" w-full relative bg-menu-bg-sm min-h-screen">
            <Logo />
            <Outlet />
            <Footer />
            <NavMenu />
        </div>
    )
}

export default AppLayout
