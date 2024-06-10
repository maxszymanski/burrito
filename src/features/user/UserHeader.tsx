import UserAvatar from './UserAvatar'
import UserName from './UserName'

function UserHeader() {
    return (
        <div className="flex flex-col items-center pt-8 pb-4 px-8 border-b border-yellow-500 ">
            <p className="mb-4 small:mb-6 xl:text-4xl xl:mb-12 ">Mój profil</p>
            <UserAvatar />
            <UserName />
        </div>
    )
}

export default UserHeader
