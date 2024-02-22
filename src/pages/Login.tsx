import LoginForm from '../features/authentication/LoginForm'
import NavMenu from '../ui/NavMenu'

function Login() {
    return (
        <>
            <div className="w-full relative bg-foodSm min-h-screen p-6 sm:p-8 flex bg-cover bg-center items-center justify-center pb-24 xl:bg-food">
                <LoginForm />
            </div>
            <NavMenu />
        </>
    )
}

export default Login
