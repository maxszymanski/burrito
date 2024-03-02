import { NavLink, useLocation } from 'react-router-dom'
import { useUser } from '../authentication/useUser'

function UserName() {
    const { user } = useUser()
    const location = useLocation()
    const currentPath = location.pathname
    return (
        <div className="text-sm small:mb-3">
            <p
                className=" my-1 small:my-2 font-bold text-lg small:text-2xl 
                "
            >
                {user?.user_metadata.userName}
            </p>
            <NavLink
                className="text-yellow-500 p-3  "
                to={
                    currentPath === '/account'
                        ? '/updateProfile'
                        : currentPath === '/updateProfile' && '/account'
                }
            >
                {currentPath === '/account'
                    ? 'Edytuj profil'
                    : currentPath === '/updateProfile' && 'Zobacz profil'}
            </NavLink>
        </div>
    )
}

export default UserName
