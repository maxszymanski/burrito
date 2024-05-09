import { Outlet } from 'react-router-dom'

function BasketPage() {
    return (
        <div className=" text-mywhite font-muli bg-[#2c2c2b] min-h-screen ">
            <Outlet />
        </div>
    )
}

export default BasketPage
