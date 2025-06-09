import { Outlet, useLocation } from 'react-router-dom'
import NavMenu from './NavMenu'
import { useEffect } from 'react'
import Cookie from './Cookie'
import { usePrice } from '../context/usePrice'

function AppLayout() {
    const { showCookieModal } = usePrice()
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    const isMenuPage = pathname === '/menu'

    return (
        <div
            className={` w-full relative bg-menu-bg-sm min-h-screen  xl:h-screen xl:overflow-y-auto overflow-x-hidden ${
                isMenuPage
                    ? ' xl:bg-cover xl:bg-center xl:bg-menu '
                    : 'xl:bg-none'
            }`}
        >
            <Outlet />
            <NavMenu noMobile={false} />
            {showCookieModal && <Cookie />}
        </div>
    )
}

export default AppLayout
