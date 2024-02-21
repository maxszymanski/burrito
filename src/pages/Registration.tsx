import SigninForm from '../features/authentication/SigninForm'
import NavMenu from '../ui/NavMenu'

function Registration() {
    return (
        <>
            <div className="w-full relative bg-menu-bg-sm min-h-screen p-6 sm:p-8 flex bg-cover bg-center items-center justify-center pb-24  bg-food">
                <SigninForm />
            </div>
            <NavMenu />
        </>
    )
}

export default Registration
