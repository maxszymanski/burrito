import { NavLink } from 'react-router-dom'

function LoginLink() {
    return (
        <NavLink
            to="/login"
            className="w-full text-center block border-2 border-yellow-100 rounded-lg text-yellow-100   transition-colors duration-300 uppercase font-semibold text-sm small:text-xl pb-2 pt-3 tracking-widest font-scope  focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed bg-[rgba(138,139,136,0.4)] hover:bg-[rgba(138,139,136,0.7)] "
        >
            Zaloguj się
        </NavLink>
    )
}

export default LoginLink
