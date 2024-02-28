import { NavLink } from 'react-router-dom'
import { useUser } from '../authentication/useUser'

function UserName() {
    const { user } = useUser()
    return (
        <div className="text-sm small:mb-3">
            <p
                className=" my-1 small:my-2 font-bold text-lg small:text-2xl 
                "
            >
                {user?.user_metadata.userName || 'Max'}
            </p>
            <NavLink className="text-yellow-500 p-3  " to="/updateProfile">
                Edytuj profil
            </NavLink>
        </div>
    )
}

export default UserName
