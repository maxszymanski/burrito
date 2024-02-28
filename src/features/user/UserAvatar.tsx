import { useUser } from '../authentication/useUser'

function UserAvatar() {
    const { user } = useUser()
    const userName = user?.user_metadata.userName || 'użytkownik'

    return (
        <img
            className="rounded-full outline-2 outline-gray-100 object-cover w-28 h-28 small:h-36 block small:w-36 object-center border border-yellow-500 shadow-[0px_0px_8px_1px] shadow-yellow-600"
            // src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_1280.jpg"
            src="/default-user.jpg"
            alt={`avatar użytkownika ${userName}`}
        />
    )
}

export default UserAvatar
