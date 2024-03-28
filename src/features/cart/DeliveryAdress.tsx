import Loader from '../../ui/Loader'
import { useUser } from '../authentication/useUser'
import DeliveryForm from './DeliveryForm'

function DeliveryAdress() {
    const { user, isAuthenticated, isLoading } = useUser()
    const userData = user?.user_metadata
    const storedDeliveryData = localStorage.getItem('deliveryData')
    const shippingData = storedDeliveryData
        ? JSON.parse(storedDeliveryData)
        : null

    if (isLoading) return <Loader />

    return (
        <div className="mt-5 ">
            <h3 className="text-2xl pb-2 border-b-[1px] border-yellow-500">
                Dane odbiorcy
            </h3>
            {(isAuthenticated || shippingData) && (
                <div className="flex justify-between items-end my-5">
                    <div className="text-sm small:text-base leading-5 pb-1">
                        <p>{userData?.userName || shippingData.name}</p>
                        <p>{userData?.street || shippingData.streetUser}</p>
                        <p>
                            {userData?.zipCode || shippingData.zipCodeUser}{' '}
                            {userData?.city || shippingData.cityUser}
                        </p>
                        <p>{userData?.phone || shippingData.phoneUser}</p>
                    </div>
                    <button className="text-yellow-500 p-1">Zmień</button>
                </div>
            )}
            {!isAuthenticated && !isLoading && !shippingData && (
                <DeliveryForm />
            )}
        </div>
    )
}

export default DeliveryAdress
