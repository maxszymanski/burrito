import { Link } from 'react-router-dom'
import UserHeader from './UserHeader'
import UserMain from './UserMain'

function UpdateProfileMenu() {
    return (
        <section className="text-center  min-h-screen text-mywhite small:text-lg pb-24 small:pb-32  lg:pt-32 lg:ml-12">
            <UserHeader />
            <UserMain>
                <Link
                    className="text-mywhite p-3 block xl:text-lg hover:text-yellow-400 transition-colors duration-300 "
                    to="/updateProfile"
                >
                    Zaktualizuj swoje dane i zdjęcie
                </Link>
                <Link
                    className="text-mywhite p-3  blockxl:text-lg hover:text-yellow-400 transition-colors duration-300 "
                    to="/updatePassword"
                >
                    Zmiana hasła
                </Link>
            </UserMain>
        </section>
    )
}

export default UpdateProfileMenu
