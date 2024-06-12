import Footer from '../../ui/Footer'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

function Menu() {
    return (
        <main className=" text-mywhite min-h-full xl:pt-20  relative ">
            <div className="min-h-full w-full absolute hidden xl:block top-0 left-0 bg-[rgba(0,0,0,0.6)] z-0"></div>
            <div className=" pt-8 px-4 lg:container lg:mx-auto w-full ">
                <MenuMobile />
                <MenuDesktop />
            </div>
            <Footer />
        </main>
    )
}

export default Menu
