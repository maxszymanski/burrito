import { useForm } from 'react-hook-form'
import FormRow from '../../ui/FormRow'
import { LuEye } from 'react-icons/lu'
import { IoMdEyeOff } from 'react-icons/io'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '../../ui/Button'
import { useSignUp } from './useSignin'

function SigninForm() {
    const [isShowPassword, setIsShowPassword] = useState(false)
    // const navigate = useNavigate()
    const { register, formState, handleSubmit, reset, getValues } = useForm()
    const { errors } = formState
    const { signUp, isLoading } = useSignUp()
    const inputClass =
        'w-full h-8 accent-yellow-500 focus:outline-none focus:ring small:h-12 focus:ring-yellow-500 focus:ring-offset-2 placeholder:text-lg px-4 pt-1 placeholder:text-mywhite placeholder:font-scope placeholder:tracking-wide rounded-lg text-mywhite font-scope text-sm small:text-base focus:pt-0 bg-[rgba(138,139,136,0.4)]'

    const onSubmit = (newUser) => {
        signUp(newUser, { onSettled: reset() })
    }
    const handleShowPassword = () => {
        setIsShowPassword((show) => !show)
    }

    return (
        <div className="bg-[#2c2c2b] px-6 py-12 w-full text-mywhite relative rounded-lg max-w-2xl">
            <img
                src="./pin.png"
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
                    >
                        {isShowPassword ? <IoMdEyeOff /> : <LuEye />}
                    </button>
                </FormRow>
                <Button
                    onClick={() => {}}
                    type="w-full mt-2"
                    disabled={isLoading}
                >
                    Zarejestruj się
                </Button>
                <p className="font-scope text-xs small:text-base p-2 text-center text-mywhite transition-colors duration-300 my-6 ">
                    Posiadasz już konto i chcesz się zalogować?
                </p>
                <NavLink
                    to="/login"
                    aria-disabled={isLoading}
                    className="w-full text-center block border-2 border-yellow-100 rounded-lg text-yellow-100   transition-colors duration-300 uppercase font-semibold text-sm small:text-xl pb-2 pt-3 tracking-widest font-scope  focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed bg-[rgba(138,139,136,0.4)] hover:bg-[rgba(138,139,136,0.7)] "
                >
                    Zaloguj się
                </NavLink>
            </form>
        </div>
    )
}

export default SigninForm
