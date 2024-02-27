import { NavLink } from 'react-router-dom'
import Logout from '../authentication/Logout'
import { useUser } from '../authentication/useUser'
import UserAvatar from './UserAvatar'
import UserName from './UserName'

function UserProfile() {
    const { user } = useUser()
    const userData = {
        userName: 'Max',
        email: 'maksymilianszymanski2@gmail.com',
        street: 'kolejowa 49',
        city: 'Łączany',
        zipCode: '34-115',
        phone: '888148045',
        points: '30',
        level: 'gold',
        favorite: 'Burrito Beef, Taco Pork',
    }
    const {
        userName,
        email,
        street,
        city,
        zipCode,
        phone,
        points,
        level,
        favorite,
    } = userData

    return (
        <div className="text-center ">
            <div className="flex flex-col items-center  bg-yellow-500 py-10 px-8 rounded-b-3xl">
                <UserAvatar />
                <UserName
                    userName={user?.user_metadata?.userName || 'Max'}
                    email={email}
                />
            </div>
            <div className="text-left">
                <h3 className="text-yellow-500">Szczegóły</h3>
                <p>kolejowa 41</p>
                <p>34-115 Łączany</p>
                <p>+48888148045</p>
            </div>

            <Logout />
        </div>
    )
}

export default UserProfile
