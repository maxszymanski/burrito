import { Outlet } from 'react-router-dom'

function BasketPage() {
    return (
        <div className="px-4 py-6 text-mywhite font-muli bg-[#2c2c2b] min-h-screen small:px-6">
            <Outlet />      
        </div>
    )
}

export default BasketPage
