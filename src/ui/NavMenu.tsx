import { BiBasket } from 'react-icons/bi'
import { BiFoodMenu } from 'react-icons/bi'
import { FaRegCircleUser } from 'react-icons/fa6'
import { GoHome } from 'react-icons/go'
import { CiPhone } from 'react-icons/ci'
import NavItem from './NavItem'

function NavMenu() {
    const number = 2
    const isFixed = number >= 1
    return (
        <nav className="fixed left-0 bottom-0 w-full border-t-[1px] border-stone-700  ">
            <ul
                className="px-2 py-1 font-scope text-2xl small:text-3xl text-mywhite flex
			justify-between bg-menu-bg-sm items-center "
            >
                <NavItem icon={<GoHome />} iconText="Home" linkTo="/" />
                <NavItem icon={<BiFoodMenu />} iconText="Menu" linkTo="/menu" />
                <NavItem icon={<BiBasket />} iconText="Koszyk" linkTo="/basket">
                    {isFixed && (
                        <p className="absolute top-6 right-2 w-5 h-5 bg-gradient-to-r from-[#F92525] to-[#9F9C30] text-mywhite rounded-full text-center font-scope  flex items-center justify-center">
                            <span className="text-xs mt-0.5">{number}</span>
                        </p>
                    )}
                </NavItem>
                <NavItem
                    icon={<FaRegCircleUser />}
                    iconText="Konto"
                    linkTo="/login"
                />
                <NavItem
                    icon={<CiPhone />}
                    iconText="Kontakt"
                    linkTo="/contact"
                />
            </ul>
        </nav>
    )
}

export default NavMenu
