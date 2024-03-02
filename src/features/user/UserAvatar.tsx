import { useUser } from '../authentication/useUser'

function UserAvatar() {
    const { user } = useUser()
    const userName = user?.user_metadata.userName || 'użytkownik'

    return (
        <img
            className="rounded-full outline-2 outline-gray-100 object-cover w-28 h-28 small:h-36 block small:w-36 object-center border border-yellow-500 shadow-[0px_0px_8px_1px] shadow-yellow-600"
            src="https://img.freepik.com/premium-zdjecie/halloween-obrazy-hd-8k-tapeta-zdjecie-fotograficzne_890746-107117.jpg"
            alt={`avatar użytkownika ${userName}`}
        />
    )
}

export default UserAvatar
