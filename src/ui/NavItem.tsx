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
        <li className="text-mywhite p-2 flex flex-col gap-2.5 items-center small:gap-3 relative ">
            <NavLink
                to={linkTo}
                className={({ isActive }) =>
                    isActive ? 'text-yellow-500' : ''
                }
            >
                {icon}
                <span className="text-xs">{iconText}</span>
            </NavLink>
            {children}
        </li>
    )
}

export default NavItem
