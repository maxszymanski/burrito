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
        <li className="text-mywhite  flex flex-col gap-2.5 items-center small:gap-3 relative ">
            <NavLink
                to={linkTo}
                className={({ isActive }) =>
                    isActive ? 'text-yellow-500 py-2 px-3' : 'py-2 px-3'
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
