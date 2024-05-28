import { useState } from 'react'
import SearchButton from './SearchButton'
import OrderSearch from './OrderSearch'
import { useUser } from '../features/authentication/useUser'

function Logo() {
    const [isOpen, setIsOpen] = useState(false)
    const { isAuthenticated } = useUser()

    const handleToggleIsOpen = () => {
        setIsOpen((is) => !is)
    }

    return (
        <>
            <OrderSearch isOpen={isOpen} />
            <div className="flex justify-center items-center  py-6 md:-mt-24 gap-6">
                <img
                    src="./logo-md.png"
                    alt="logo"
                    className="h-8 small:h-10 md:h-12 "
                />
                {!isAuthenticated && (
                    <>
                        {/* <OrderSearch isOpen={isOpen} /> */}
                        {/* {!isOpen && (
                            <SearchButton onClick={handleToggleIsOpen} />
                        )} */}
                    </>
                )}
            </div>
        </>
    )
}

export default Logo
