import { SubmitHandler, useForm } from 'react-hook-form'
import FormRow from '../../ui/FormRow'
import { LuEye } from 'react-icons/lu'
import { IoMdEyeOff } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from '../../ui/Button'
import useLogin from './useLogin'
import Loader from '../../ui/Loader'
import { usePrice } from '../../context/usePrice'
import { useSelector } from 'react-redux'
import { getCart } from '../cart/cartSlice'
import { useUser } from './useUser'
import { LoginFormInputs, User } from '../../types/types'
import Spinner from '../../ui/Spinner'
import LoginTestButton from '../../ui/LoginTestButton'

function LoginForm() {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const { login, isPending } = useLogin()
    const { setIsFormShow } = usePrice()
    const cart = useSelector(getCart)
    const { isAuthenticated } = useUser()
    const { register, formState, handleSubmit, reset } =
        useForm<LoginFormInputs>()
    const { errors } = formState
    const navigate = useNavigate()
    const inputClass =
        'w-full h-8 accent-yellow-500 focus:outline-none focus:ring small:h-12 focus:ring-yellow-500 focus:ring-offset-2 placeholder:text-lg px-4 pt-1 placeholder:text-mywhite placeholder:font-scope placeholder:tracking-wide rounded-lg text-mywhite font-scope text-sm small:text-base focus:pt-0 bg-[rgba(138,139,136,0.4)]'

    useEffect(() => {
        isAuthenticated && navigate('/account', { replace: true })
    }, [isAuthenticated, navigate])

    const onSubmit: SubmitHandler<LoginFormInputs> = (user: User) => {
        login(user, {
            onSuccess: () => {
                reset()
                cart.length > 0
                    ? navigate('/basket', { replace: true })
                    : navigate('/', { replace: true })
            },
        })
        setIsFormShow(false)
    }

    const handleTestLogin = () => {
        const testAccount = {
            email: 'maxprojectss@gmail.com',
            password: 'Startowe1!',
        }
        login(testAccount, {
            onSuccess: () => {
                reset()
                cart.length > 0
                    ? navigate('/basket', { replace: true })
                    : navigate('/', { replace: true })
            },
        })
        setIsFormShow(false)
    }
    const handleShowPassword = () => {
        setIsShowPassword((show) => !show)
    }

    if (isPending) return <Loader />

    return (
        <div className="bg-[#2c2c2b] px-6 py-12 w-full text-mywhite relative rounded-lg max-w-2xl xl:mt-16">
            <img
                src="./images/pin.webp"
                alt="żółta pinezka"
                className="absolute small:h-14 h-10 top-1.5 -right-1"
            />
            <h2 className="text-center text-yellow-500 small:text-5xl text-3xl font-bold pb-12 small:pb-16 small:pt-4 tracking-wider">
                Logowanie
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormRow error={errors?.email?.message}>
                    <input
                        {...register('email', {
                            required: 'Nieprawidłowy adres email',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Proszę podać poprawny adres email',
                            },
                        })}
                        type="email"
                        id="email"
                        placeholder="Email"
                        // defaultValue="maksymilianszymanski2@gmail.com"
                        className={`${inputClass}  ${
                            errors?.email?.message ? 'focus:ring-red-400' : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow error={errors?.password?.message}>
                    <input
                        {...register('password', {
                            required: 'Podane hasło jest nieprawidłowe',
                            minLength: {
                                value: 8,
                                message:
                                    'Hasło nie może być krótsze niż 8 znaków',
                            },
                        })}
                        type={isShowPassword ? 'text' : 'password'}
                        id="password"
                        placeholder="Hasło"
                        // defaultValue="Startowe1"
                        className={`${inputClass} ${
                            errors?.password?.message
                                ? 'focus:ring-red-400'
                                : ''
                        }
                    `}
                    />
                    <button
                        className="absolute -top-0.5 p-2 right-1 text-lg  small:p-3.5 small:text-2xl  small:right-2 focus:outline-none focus:text-yellow-500 hover:text-yellow-500 transition-colors duration-300 text-mywhite"
                        onClick={handleShowPassword}
                        type="button"
                        disabled={isPending}
                    >
                        {isShowPassword ? <IoMdEyeOff /> : <LuEye />}
                    </button>
                </FormRow>
                <Button
                    onClick={() => {}}
                    disabled={isPending}
                    type="w-full mt-2"
                >
                    {isPending ? <Spinner /> : 'zaloguj'}
                </Button>
                <LoginTestButton onClick={handleTestLogin} />
                <Link
                    to="/forgotpassword"
                    className="font-scope text-xs small:text-base p-2 text-center block hover:text-yellow-500 transition-colors duration-300 text-yellow-400 my-6 "
                >
                    Nie pamiętasz swojego hasła lub chcesz stworzyć nowe?
                </Link>
                <Link
                    to="/registration"
                    className="w-full text-center block border-2 border-yellow-100 rounded-lg text-yellow-100   transition-colors duration-300 uppercase font-semibold text-sm small:text-xl pb-2 pt-3 tracking-widest font-scope  focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed bg-[rgba(138,139,136,0.4)] hover:bg-[rgba(138,139,136,0.8)]"
                >
                    załóż konto
                </Link>
            </form>
        </div>
    )
}

export default LoginForm
