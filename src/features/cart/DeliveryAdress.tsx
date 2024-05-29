import Loader from '../../ui/Loader'
import { useUser } from '../authentication/useUser'
import DeliveryForm from './DeliveryForm'
import { usePrice } from '../../context/PriceContext'
import { useEffect, useMemo } from 'react'

function DeliveryAdress() {
    const { user, isAuthenticated, isLoading } = useUser()
    const { isFormShow, handleShowForm, setIsFormShow, setOrderAddress } =
        usePrice()
    const userData = user?.user_metadata
    const storedDeliveryData = localStorage.getItem('deliveryData')
    const shippingData = storedDeliveryData
        ? JSON.parse(storedDeliveryData)
        : null

    const deliveryAddress = useMemo(
        () => ({
            name: shippingData ? shippingData.name : userData?.userName,
            street: shippingData ? shippingData.streetUser : userData?.street,
            zip: shippingData ? shippingData.zipCodeUser : userData?.zipCode,
            city: shippingData ? shippingData.cityUser : userData?.city,
            phone: shippingData ? shippingData.phoneUser : userData?.phone,
        }),
        [shippingData, userData]
    )

    useEffect(() => {
        setOrderAddress((prevAddress) => {
            if (
                JSON.stringify(prevAddress) !== JSON.stringify(deliveryAddress)
            ) {
                return deliveryAddress
            }
            return prevAddress
        })
    }, [deliveryAddress, setOrderAddress])

    useEffect(() => {
        if (!isLoading && !isAuthenticated && !storedDeliveryData) {
            setIsFormShow(true)
        }
    }, [isAuthenticated, isLoading, storedDeliveryData, setIsFormShow])

    if (isLoading) return <Loader />

    return (
        <div className="mt-5 small:mt-10">
            <h4 className="text-2xl pb-2.5 border-b-[1px] border-yellow-500">
                Dane odbiorcy
            </h4>
            {(isAuthenticated || shippingData) && !isFormShow && (
                <div className="flex justify-between items-end my-6">
                    <div className="text-xs  leading-4 small:text-sm smmall:leading-5 pb-1">
                        <p>{deliveryAddress.name.toUpperCase()}</p>
                        <p>{deliveryAddress.street.toUpperCase()}</p>
                        <p>
                            {deliveryAddress.zip.toUpperCase()}{' '}
                            {deliveryAddress.city.toUpperCase()}
                        </p>
                        <p>{deliveryAddress.phone.toUpperCase()}</p>
                    </div>
                    <button
                        className="text-yellow-500 p-1 uppercase text-xs small:text-sm"
                        onClick={handleShowForm}
                    >
                        Zmień
                    </button>
                </div>
            )}
            {isFormShow && (
                <DeliveryForm
                    onReset={handleShowForm}
                    storedDeliveryData={storedDeliveryData}
                />
            )}
        </div>
    )
}

export default DeliveryAdress
