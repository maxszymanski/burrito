import { useUser } from '../authentication/useUser'

function UserAvatar() {
    const { user } = useUser()
    const userName = user?.user_metadata.userName || 'użytkownik'

    return (
        <img
            className="rounded-full  outline-2 outline-gray-100 object-cover w-28 block small:w-32 object-center"
            src="/default-user.jpg"
            alt={`avatar użytkownika ${userName}`}
        />
    )
}

export default UserAvatar
