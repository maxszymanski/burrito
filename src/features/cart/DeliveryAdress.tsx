import Loader from '../../ui/Loader'
import { useUser } from '../authentication/useUser'
import DeliveryForm from './DeliveryForm'
import { usePrice } from '../../context/PriceContext'

function DeliveryAdress() {
    const { user, isAuthenticated, isLoading } = useUser()
    const { isFormShow, handleShowForm } = usePrice()
    const userData = user?.user_metadata
    const storedDeliveryData = localStorage.getItem('deliveryData')
    const shippingData = storedDeliveryData
        ? JSON.parse(storedDeliveryData)
        : null

    if (isLoading) return <Loader />

    return (
        <div className="mt-5 small:mt-10">
            <h4 className="text-2xl pb-2.5 border-b-[1px] border-yellow-500">
                Dane odbiorcy
            </h4>
            {(isAuthenticated || shippingData) && !isFormShow && (
                <div className="flex justify-between items-end my-6">
                    <div className="text-sm small:text-base leading-5 pb-1">
                        <p>
                            {shippingData
                                ? shippingData.name
                                : userData?.userName}
                        </p>
                        <p>
                            {shippingData
                                ? shippingData.streetUser
                                : userData?.street}
                        </p>
                        <p>
                            {shippingData
                                ? shippingData.zipCodeUser
                                : userData?.zipCode}{' '}
                            {shippingData
                                ? shippingData.cityUser
                                : userData?.city}
                        </p>
                        <p>
                            {shippingData
                                ? shippingData.phoneUser
                                : userData?.phone}
                        </p>
                    </div>
                    <button
                        className="text-yellow-500 p-1 uppercase text-xs small:text-sm"
                        onClick={handleShowForm}
                    >
                        Zmień
                    </button>
                </div>
            )}
            {(!isAuthenticated && !isLoading && !shippingData) ||
                (isFormShow && <DeliveryForm onReset={handleShowForm} />)}
        </div>
    )
}

export default DeliveryAdress
