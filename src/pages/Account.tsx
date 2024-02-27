import Logout from '../features/authentication/Logout'
import { useUser } from '../features/authentication/useUser'
import UserAvatar from '../features/user/userAvatar'

function Account() {
    const { user } = useUser()
    return (
        <div className="text-mywhite pt-28 pb-28 px-8 font-scope ">
            <div className="flex flex-col items-center ">
                <UserAvatar />
                <p
                    className="mt-6 leading-8 font-bold  text-xl small:text-2xl 
                "
                >
                    {user?.user_metadata.userName} <br />
                </p>
                <p className="mt-2">maksymilianszymanski2@gmail.com</p>
            </div>
            <div>
                <h3 className="text-yellow-500">Szczegóły</h3>
                <p>kolejowa 41</p>
                <p>34-115 Łączany</p>
                <p>+48888148045</p>
                <p></p>
            </div>
            <Logout />
        </div>
    )
}

export default Account
