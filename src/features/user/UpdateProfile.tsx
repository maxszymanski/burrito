import UserHeader from './UserHeader'
import UserMain from './UserMain'
import UpdateForm from './UpdateForm'

function UpdateProfile() {
    return (
        <div className="text-center bg-[#2c2c2b] min-h-screen text-mywhite small:text-lg pb-24 small:pb-32">
            <UserHeader />
            <UserMain>
                <UpdateForm />
            </UserMain>
        </div>
    )
}

export default UpdateProfile
