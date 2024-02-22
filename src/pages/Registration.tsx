import SigninForm from '../features/authentication/SigninForm'
import NavMenu from '../ui/NavMenu'

function Registration() {
    return (
        <>
            <div className="w-full relative  min-h-screen p-6 sm:p-8 flex bg-cover bg-center items-center justify-center pb-24  xl:bg-food bg-foodSm">
                <SigninForm />
            </div>
            <NavMenu />
        </>
    )
}

export default Registration
