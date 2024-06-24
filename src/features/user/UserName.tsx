import { NavLink, useLocation } from 'react-router-dom'
import { useUser } from '../authentication/useUser'

function UserName() {
    const { user } = useUser()
    const location = useLocation()
    const currentPath = location.pathname
    const route: string =
        currentPath === '/account'
            ? '/updateProfileMenu'
            : currentPath === '/updateProfileMenu'
            ? '/account'
            : currentPath === '/updateProfile'
            ? '/account'
            : ''

    return (
        <div className="text-sm small:mb-3 xl:my-4">
            <p
                className=" my-1 small:my-2 font-bold text-lg small:text-2xl xl:text-3xl
                "
            >
                {user?.user_metadata.userName}
            </p>
            <NavLink
                className="text-yellow-500 p-3 xl:text-lg hover:text-yellow-400 transition-colors duration-300 "
                to={route}
            >
                {currentPath === '/account'
                    ? 'Edytuj profil'
                    : currentPath === '/updateProfileMenu'
                    ? 'Zobacz profil'
                    : currentPath === '/updateProfile'
                    ? 'Zobacz profil'
                    : ''}
            </NavLink>
        </div>
    )
}

export default UserName
