import { NavLink } from 'react-router-dom'

function UserName({ userName = '', email = '' }) {
    return (
        <div className="text-sm text-mywhite ">
            <p
                className="mt-6 font-bold  text-lg small:text-2xl 
                "
            >
                {userName}
            </p>
            <p className="my-1">{email}</p>
            <NavLink className="text-gray-950 p-2" to="/updateProfile">
                Edytuj profil
            </NavLink>
        </div>
    )
}

export default UserName
