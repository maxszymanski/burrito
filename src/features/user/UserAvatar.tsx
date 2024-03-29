import { useUser } from '../authentication/useUser'

function UserAvatar() {
    const { user } = useUser()
    const userName = user?.user_metadata.userName || 'użytkownik'
    const avatar = user?.user_metadata.avatar || '/user2.jpg'

    return (
        <a href={avatar}>
            <img
                className="rounded-full outline-2 outline-gray-100 object-cover w-28 h-28 small:h-36 block small:w-36 object-center border border-yellow-500 shadow-[0px_0px_8px_1px] shadow-yellow-600"
                src={avatar}
                alt={`avatar użytkownika ${userName}`}
            />
        </a>
    )
}

export default UserAvatar
