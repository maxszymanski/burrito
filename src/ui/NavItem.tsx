import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps {
    icon: ReactNode
    iconText: string
    linkTo: string
    children?: ReactNode
    isDesktop: boolean
    isCart: boolean
    isMobile: boolean
}

const NavItem: React.FC<NavItemProps> = ({
    icon,
    iconText = '',
    linkTo = '/',
    children,
    isDesktop = false,
    isMobile = false,
    isCart = false,
}) => {
    return (
        <li
            className={`text-mywhite relative xl:hover:text-yellow-500 duration-300 transition-colors ${
                isDesktop ? 'xl:hidden' : ''
            } ${isCart ? '' : ''} ${isMobile ? 'hidden xl:block' : ''}`}
        >
            <NavLink
                to={linkTo}
                className={({ isActive }) =>
                    isActive
                        ? 'text-yellow-500 py-2 px-3 flex flex-col items-center gap-2.5 small:gap-3 text-2xl small:text-3xl xl:text-4xl xl:px-4'
                        : 'py-2 px-3 flex flex-col items-center gap-2.5 small:gap-3 text-2xl small:text-3xl xl:text-4xl xl:px-4 '
                }
            >
                {icon}
                <span className="text-xs xl:text-base">{iconText}</span>
                {children}
            </NavLink>
        </li>
    )
}

export default NavItem
