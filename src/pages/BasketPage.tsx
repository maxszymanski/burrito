import { Outlet } from 'react-router-dom'
import NavMenu from '../ui/NavMenu'

function BasketPage() {
    return (
        <div className=" text-mywhite font-muli bg-[#2c2c2b] lg:bg-menu-bg-sm min-h-screen xl:overflow-y-auto ">
            <Outlet />
            <NavMenu noMobile />
        </div>
    )
}

export default BasketPage
