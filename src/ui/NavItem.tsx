import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps {
    icon: ReactNode
    iconText: string
    linkTo: string
    children?: ReactNode
}

const NavItem: React.FC<NavItemProps> = ({
    icon,
    iconText = '',
    linkTo = '/',
    children,
}) => {
    return (
        <li className="text-mywhite relative xl:hover:bg-[rgba(213,216,199,0.1)] duration-300 transition-colors ">
            <NavLink
                to={linkTo}
                className={({ isActive }) =>
                    isActive
                        ? 'text-yellow-500 py-2 px-3 flex flex-col items-center gap-2.5 small:gap-3 text-2xl small:text-3xl'
                        : 'py-2 px-3 flex flex-col items-center gap-2.5 small:gap-3 text-2xl small:text-3xl '
                }
            >
                {icon}
                <span className="text-xs">{iconText}</span>
                {children}
            </NavLink>
        </li>
    )
}

export default NavItem
