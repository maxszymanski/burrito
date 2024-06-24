import { BiFoodMenu } from 'react-icons/bi'
import { FaRegCircleUser } from 'react-icons/fa6'
import { GoHome } from 'react-icons/go'
import { CiPhone } from 'react-icons/ci'
import { TbShoppingBag } from 'react-icons/tb'
import NavItem from './NavItem'
import { useUser } from '../features/authentication/useUser'
import { useSelector } from 'react-redux'
import { getCart } from '../features/cart/cartSlice'
import Container from './Container'
import { NavLink } from 'react-router-dom'
import OrderSearch from './OrderSearch'

function NavMenu({ noMobile = false }: { noMobile: boolean }) {
    const { isAuthenticated } = useUser()
    const cart = useSelector(getCart)
    const cartQuantity =
        cart &&
        cart.reduce(
            (acc: number, cur: { quantity: number }) => acc + cur.quantity,
            0
        )
    const isInCart = cartQuantity >= 1
    return (
        <nav
            className={`fixed left-0  bottom-0 w-full border-t-[1px] border-stone-700  max-h-20 xl:top-0  xl:border-none xl:max-h-28 xl:bg-[rgb(0,0,0,0.7)] z-50
                    ${noMobile ? 'hidden xl:block' : 'block'}
            `}
        >
            <Container isFooter={false}>
                <ul
                    className="w-full px-2 pt-1 font-scope text-2xl small:text-3xl text-mywhite flex
			justify-between bg-[#1d1d1d] items-center xl:bg-transparent "
                >
                    <NavItem
                        icon={<GoHome />}
                        iconText="Start"
                        linkTo="/"
                        isDesktop
                        isCart={false}
                        isMobile={false}
                    />
                    <li className="hidden xl:block ">
                        <NavLink to="/" className=" py-4 px-3  ">
                            <img
                                src="./images/logo.webp"
                                alt="logo"
                                className="h-9 mb-2 "
                            />
                        </NavLink>
                    </li>
                    <NavItem
                        icon={<BiFoodMenu />}
                        iconText="Menu"
                        linkTo="/menu"
                        isCart={false}
                        isMobile={false}
                        isDesktop={false}
                    />
                    <NavItem
                        isCart
                        icon={<TbShoppingBag />}
                        iconText="Koszyk"
                        linkTo="/basket"
                        isMobile={false}
                        isDesktop={false}
                    >
                        {isInCart && (
                            <p className="absolute small:top-6 top-5 small:right-2 right-3 small:w-5 small:h-5 h-4 w-4 bg-gradient-to-r from-[#F92525] to-[#9F9C30] text-mywhite rounded-full text-center font-scope flex items-center justify-center">
                                <span className="text-xs mt-0.5">
                                    {cartQuantity ? cartQuantity : 0}
                                </span>
                            </p>
                        )}
                    </NavItem>

                    <NavItem
                        isMobile={false}
                        isDesktop={false}
                        isCart={false}
                        icon={<FaRegCircleUser />}
                        iconText="Profil"
                        linkTo={isAuthenticated ? '/account' : '/login'}
                    />
                    <NavItem
                        isMobile={false}
                        isCart={false}
                        isDesktop
                        icon={<CiPhone />}
                        iconText="Zadzwoń"
                        linkTo="tel:+48123456789"
                    />
                    <NavItem
                        isDesktop={false}
                        isCart={false}
                        isMobile
                        icon={<CiPhone />}
                        iconText="Kontakt"
                        linkTo="/contact"
                    />
                    <li className="hidden xl:block">
                        <OrderSearch isDesktop />
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavMenu
