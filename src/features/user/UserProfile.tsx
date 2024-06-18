import { useState } from 'react'
import Logout from '../authentication/Logout'
import { useUser } from '../authentication/useUser'
import UserHeader from './UserHeader'
import UserInfo from './UserInfo'
import UserMain from './UserMain'
import RankDetails from '../../ui/RankDetails'
import Loader from '../../ui/Loader'
import { Link } from 'react-router-dom'
import { useOrders } from '../orders/useOrders'
import { UserMetadata } from '../../types/types'

function UserProfile() {
    const [showDetails, setShowDetails] = useState(false)
    const { user, isLoading: isLoadingUser } = useUser()

    const {
        city = '',
        phone = '',
        street = '',
        zipCode = '',
    }: UserMetadata = user?.user_metadata || {}
    const { orders: orderss } = useOrders()
    const orders = orderss?.length || 0
    if (isLoadingUser) return <Loader />

    return (
        <div className="text-center  min-h-screen text-mywhite small:text-lg pb-24 small:pb-32 lg:pt-32 lg:ml-12">
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
                    <div className="flex justify-between items-center relative mb-1.5">
                        <h3 className="font-bold text-yellow-500">
                            Historia Zamówień
                        </h3>
                        <Link to="/ordersHistory">{orders} zamówień</Link>
                    </div>
                    <Link to="/ordersHistory">Wyświetl</Link>
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
