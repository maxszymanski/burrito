import { BiFoodMenu } from 'react-icons/bi'
import { FaRegCircleUser } from 'react-icons/fa6'
import { GoHome } from 'react-icons/go'
import { CiPhone } from 'react-icons/ci'
import { TbShoppingBag } from 'react-icons/tb'
import NavItem from './NavItem'
import { useUser } from '../features/authentication/useUser'

function NavMenu() {
    const { isAuthenticated } = useUser()

    const number = 2
    const isFixed = number >= 1
    return (
        <nav className="fixed left-0 bottom-0 w-full border-t-[1px] border-stone-700 ">
            <ul
                className="px-2 pt-1 font-scope text-2xl small:text-3xl text-mywhite flex
			justify-between bg-menu-bg-sm items-center "
            >
                <NavItem icon={<GoHome />} iconText="Home" linkTo="/" />
                <NavItem icon={<BiFoodMenu />} iconText="Menu" linkTo="/menu" />
                <NavItem
                    icon={<TbShoppingBag />}
                    iconText="Koszyk"
                    linkTo="/basket"
                >
                    {isFixed && (
                        <p className="absolute small:top-6 top-5 small:right-2 right-3 small:w-5 small:h-5 h-4 w-4 bg-gradient-to-r from-[#F92525] to-[#9F9C30] text-mywhite rounded-full text-center font-scope  flex items-center justify-center">
                            <span className="text-xs mt-0.5">{number}</span>
                        </p>
                    )}
                </NavItem>

                <NavItem
                    icon={<FaRegCircleUser />}
                    iconText="Profil"
                    linkTo={isAuthenticated ? '/account' : '/login'}
                />
                <NavItem
                    icon={<CiPhone />}
                    iconText="Zadzwoń"
                    linkTo="tel:514000000"
                />
            </ul>
        </nav>
    )
}

export default NavMenu
