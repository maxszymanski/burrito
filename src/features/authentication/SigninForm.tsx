import { SubmitHandler, useForm } from 'react-hook-form'
import FormRow from '../../ui/FormRow'
import { LuEye } from 'react-icons/lu'
import { IoMdEyeOff } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from '../../ui/Button'
import { useSignUp } from './useSignin'
import LoginLink from '../../ui/LoginLink'
import { useUser } from './useUser'
import { NewUser } from '../../types/types'

function SigninForm() {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const { register, formState, handleSubmit, reset, getValues } =
        useForm<NewUser>()
    const { errors } = formState
    const { signUp, isPending } = useSignUp()
    const { isAuthenticated } = useUser()
    const navigate = useNavigate()
    const inputClass =
        'w-full h-8 accent-yellow-500 focus:outline-none focus:ring small:h-12 focus:ring-yellow-500 focus:ring-offset-2 placeholder:text-lg px-4 pt-1 placeholder:text-mywhite placeholder:font-scope placeholder:tracking-wide rounded-lg text-mywhite font-scope text-sm small:text-base focus:pt-0 bg-[rgba(138,139,136,0.4)] '
    useEffect(() => {
        isAuthenticated && navigate('/account', { replace: true })
    }, [isAuthenticated, navigate])

    const onSubmit: SubmitHandler<NewUser> = (newUser: NewUser) => {
        signUp(newUser, { onSettled: () => reset() })
    }
    const handleShowPassword = () => {
        setIsShowPassword((show) => !show)
    }

    return (
        <div className="bg-[#2c2c2b] px-6 py-12 w-full text-mywhite relative rounded-lg max-w-2xl lg:px-12 xl:my-24 lg:my-12 sm:my-16">
            <img
                src="./images/pin.webp"
                alt="żółta pinezka"
                className="absolute small:h-14 h-10 top-1.5 -right-1"
            />
            <h2 className="text-center text-yellow-500 small:text-5xl text-3xl font-bold pb-12 small:pb-16 small:pt-4 tracking-wider">
                Rejestracja
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className=" ">
                <FormRow error={errors?.userName?.message}>
                    <input
                        {...register('userName', {
                            required: 'Proszę podać nazwę użytkownika',
                        })}
                        type="text"
                        id="userName"
                        disabled={isPending}
                        placeholder="Imię"
                        className={`${inputClass}  ${
                            errors?.userName?.message
                                ? 'focus:ring-red-400'
                                : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow error={errors?.street?.message}>
                    <input
                        {...register('street', {
                            required: 'Proszę podać ulicę i numer domu',
                        })}
                        type="text"
                        id="street"
                        disabled={isPending}
                        placeholder="Ulica i numer domu"
                        className={`${inputClass}  ${
                            errors?.street?.message ? 'focus:ring-red-400' : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow error={errors?.zipCode?.message}>
                    <input
                        {...register('zipCode', {
                            required: 'Proszę podać kod pocztowy',
                        })}
                        type="text"
                        disabled={isPending}
                        id="zipCode"
                        placeholder="Kod pocztowy"
                        className={`${inputClass}  ${
                            errors?.zipCode?.message ? 'focus:ring-red-400' : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow error={errors?.city?.message}>
                    <input
                        {...register('city', {
                            required: 'Proszę podać nazwę miejscowość',
                        })}
                        type="text"
                        id="city"
                        disabled={isPending}
                        placeholder="Miejscowość"
                        className={`${inputClass}  ${
                            errors?.city?.message ? 'focus:ring-red-400' : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow error={errors?.phone?.message}>
                    <input
                        {...register('phone', {
                            required: 'Proszę podać numer telefonu',
                            minLength: {
                                value: 9,
                                message:
                                    'Numer telefonu musi składać się z 9 cyfr',
                            },
                            maxLength: {
                                value: 9,
                                message:
                                    'Numer telefonu musi składać się z 9 cyfr',
                            },
                            pattern: {
                                value: /^\d+$/,
                                message:
                                    'Numer telefonu nie może zawierać liter ani znaków specjalnych',
                            },
                        })}
                        type="phone"
                        id="phone"
                        disabled={isPending}
                        placeholder="Numer telefonu"
                        className={`${inputClass}  ${
                            errors?.phone?.message ? 'focus:ring-red-400' : ''
                        }
                    `}
                    />
                </FormRow>
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
                        disabled={isPending}
                        className={`${inputClass}  ${
                            errors?.email?.message ? 'focus:ring-red-400' : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow>
                    <input
                        {...register('password', {
                            required: 'Podane hasła nie są zgodne',
                            minLength: {
                                value: 8,
                                message:
                                    'Hasło nie może być krótsze niż 8 znaków',
                            },
                        })}
                        type={isShowPassword ? 'text' : 'password'}
                        id="password"
                        disabled={isPending}
                        placeholder="Hasło (min. 8 znaków)"
                        className={`${inputClass} focus:pt-0 ${
                            errors?.password?.message
                                ? 'focus:ring-red-400'
                                : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow error={errors?.passwordConfirm?.message}>
                    <input
                        {...register('passwordConfirm', {
                            required: 'Podane hasła nie są zgodne',
                            validate: (value) =>
                                value === getValues().password ||
                                'Hasła nie są identyczne',
                        })}
                        type={isShowPassword ? 'text' : 'password'}
                        id="passwordConfirm"
                        placeholder="Powtórz hasło"
                        disabled={isPending}
                        className={`${inputClass}  focus:pt-0 ${
                            errors?.passwordConfirm?.message
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
                    type="w-full mt-2"
                    disabled={isPending}
                >
                    Zarejestruj się
                </Button>
                <p className="font-scope text-xs small:text-base p-2 text-center text-mywhite transition-colors duration-300 my-6 ">
                    Posiadasz już konto i chcesz się zalogować?
                </p>
                <LoginLink />
            </form>
        </div>
    )
}

export default SigninForm
