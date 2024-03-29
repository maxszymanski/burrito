import { useState } from 'react'
import Logout from '../authentication/Logout'
import { useUser } from '../authentication/useUser'
import UserHeader from './UserHeader'
import UserInfo from './UserInfo'
import UserMain from './UserMain'
import RankDetails from '../../ui/RankDetails'
import Loader from '../../ui/Loader'

function UserProfile() {
    const [showDetails, setShowDetails] = useState(false)
    const { user, isLoading: isLoadingUser } = useUser()
    const { city, phone, street, userName, zipCode, orders } =
        user?.user_metadata || ''

    if (isLoadingUser) return <Loader />

    return (
        <div className="text-center bg-[#2c2c2b] min-h-screen text-mywhite small:text-lg pb-24 small:pb-32">
            <UserHeader />
            <UserMain>
                <UserInfo>
                    <h3 className="font-bold text-yellow-500 ">Telefon</h3>
                    <p>+48{phone}</p>
                </UserInfo>
                <UserInfo>
                    <h3 className="font-bold text-yellow-500 ">Email</h3>
                    <p>{user?.email}</p>
                </UserInfo>
                <UserInfo>
                    <h3 className="font-bold text-yellow-500 ">Adres</h3>
                    <p>
                        {street}, {zipCode} {city}
                    </p>
                </UserInfo>
                <UserInfo>
                    <div className="flex justify-between items-center relative">
                        <h3
                            className="font-bold text-yellow-500 "
                            onMouseEnter={() => setShowDetails((open) => !open)}
                            onMouseLeave={() => setShowDetails((open) => !open)}
                        >
                            Ranga
                            <span className="ml-1">*</span>
                        </h3>
                        <p>{orders || 0} zamówień</p>
                        <RankDetails showDetails={showDetails} />
                    </div>

                    {(!orders || orders <= 10) && <p>Brązowa</p>}
                    {orders <= 30 && orders > 10 && <p>Srebrna</p>}
                    {orders > 30 && <p>Złota</p>}
                </UserInfo>
            </UserMain>

            <Logout />
        </div>
    )
}

export default UserProfile
