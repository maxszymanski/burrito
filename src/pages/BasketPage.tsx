import { Outlet } from 'react-router-dom'
import NavMenu from '../ui/NavMenu'

function BasketPage() {
    return (
        <div className=" text-mywhite font-muli bg-[#2c2c2b]  lg:bg-cart lg:bg-cover lg:bg-center min-h-screen lg:overflow-y-auto relative xl:h-screen">
            <Outlet />
            <NavMenu noMobile />
        </div>
    )
}

export default BasketPage
