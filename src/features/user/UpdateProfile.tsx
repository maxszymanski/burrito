import UserHeader from './UserHeader'
import UserMain from './UserMain'
import UpdateForm from './UpdateForm'

function UpdateProfile() {
    return (
        <section className="text-center  min-h-screen text-mywhite small:text-lg pb-24 small:pb-32  lg:pt-32 lg:ml-12">
            <UserHeader />
            <UserMain>
                <UpdateForm />
            </UserMain>
        </section>
    )
}

export default UpdateProfile
