import Loader from '../../ui/Loader'
import { useUser } from '../authentication/useUser'
import SavedAdressItem from './SavedAdressItem'

function SavedAdress() {
    const { user, isLoading } = useUser()
    if (isLoading || !user) return <Loader />
    const { userName, zipCode, phone, street, city } = user.user_metadata

    const userAddress = {
        userName,
        zipCode,
        phone,
        street,
        city,
    }
    const savedList = [userAddress, userAddress]

    return (
        <ul>
            {savedList.map((item) => (
                <SavedAdressItem item={item} key={userName} />
            ))}
        </ul>
    )
}

export default SavedAdress
