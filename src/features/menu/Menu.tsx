import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

function Menu() {
    return (
        <main className=" text-mywhite h-full xl:pt-32 min-h-screen ">
            <div className=" pt-8 px-4 lg:container lg:mx-auto w-full ">
                <h2 className="text-4xl lg:text-5xl ">Menu</h2>
                <MenuMobile />
                <MenuDesktop />
            </div>
        </main>
    )
}

export default Menu
