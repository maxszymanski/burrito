import Container from '../../ui/Container'
import MenuMobile from './MenuMobile'

function Menu() {
    return (
        <main className=" text-mywhite h-full ">
            <Container isFooter={false}>
                <div className=" pt-8 px-4 ">
                    <h2 className="text-4xl ">Menu</h2>
                    <MenuMobile />
                </div>
            </Container>
        </main>
    )
}

export default Menu
