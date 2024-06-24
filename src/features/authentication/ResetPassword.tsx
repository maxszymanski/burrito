import { useForm } from 'react-hook-form'
import UpdateUserFormRow from '../../ui/UpdateUserFormRow'
import Spinner from '../../ui/Spinner'
import Button from '../../ui/Button'
import { UpdatePasswordType } from '../../types/types'
import { useEffect, useState } from 'react'
import { useUpdatePassword } from './useUpdatePassword'
import { IoMdEyeOff } from 'react-icons/io'
import { LuEye } from 'react-icons/lu'
import { useUser } from './useUser'
import { useNavigate } from 'react-router-dom'
import Loader from '../../ui/Loader'

function ResetPassword() {
    const { isAuthenticated, isLoading } = useUser()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const navigate = useNavigate()

    const {
        handleSubmit,
        formState: { errors },
        register,
        getValues,
    } = useForm<UpdatePasswordType>()
    const { updatePassword, isUpdating } = useUpdatePassword()

    useEffect(() => {
        isAuthenticated && navigate('/')
    }, [isAuthenticated, navigate])

    if (isLoading) return <Loader />

    const onSubmit = ({ password }: UpdatePasswordType) => {
        updatePassword(password)
    }

    const handleShowPassword = () => {
        setIsShowPassword((show) => !show)
    }
    const inputClass =
        'w-full  accent-yellow-500 focus:outline-none transition-color focus:bg-[rgb(5,5,5,0.1)]  bg-transparent border-b border-yellow-500 rounded-3xl px-8 h-9 small:h-11 xl:h-12'

    return (
        <form
            className="bg-[#2c2c2b] px-6 py-12 w-full text-mywhite relative rounded-lg max-w-2xl text-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h3 className="text-center text-yellow-500 small:text-5xl text-3xl font-bold px-4 tracking-wider leading-normal small:leading-normal pb-6 ">
                Resetowanie hasła
            </h3>
            <UpdateUserFormRow
                error={errors?.password?.message}
                label="Nowe hasło"
            >
                <>
                    <input
                        {...register('password', {
                            required: 'Podane hasła nie są zgodne',
                            minLength: {
                                value: 8,
                                message:
                                    'Hasło nie może być krótsze niż 8 znaków',
                            },
                        })}
                        id="password"
                        type={isShowPassword ? 'text' : 'password'}
                        placeholder="Hasło (min. 8 znaków)"
                        className={`${inputClass} focus:pt-0 ${
                            errors?.password?.message
                                ? 'focus:ring-red-400'
                                : ''
                        }
                    `}
                    />
                    <button
                        className="absolute top-5 small:top-7 p-3.5 lg:right-6 right-3 text-lg   small:text-2xl  small:right-2 focus:outline-none lg:top-8 xl:top-9 xl:right-12 focus:text-yellow-500 hover:text-yellow-500 transition-colors duration-300 text-mywhite"
                        onClick={handleShowPassword}
                        type="button"
                        disabled={isUpdating}
                    >
                        {isShowPassword ? <IoMdEyeOff /> : <LuEye />}
                    </button>
                </>
            </UpdateUserFormRow>
            <UpdateUserFormRow
                error={errors?.password?.message}
                label="
                Powtórz hasło"
            >
                <input
                    {...register('passwordConfirm', {
                        required: 'Podane hasła nie są zgodne',
                        validate: (value) =>
                            value === getValues().password ||
                            'Hasła nie są identyczne',
                    })}
                    id="passwordConfirm"
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder="Powtórz hasło"
                    className={`${inputClass}  focus:pt-0 ${
                        errors?.passwordConfirm?.message
                            ? 'focus:ring-red-400'
                            : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <Button disabled={isUpdating} type=" mt-2 px-6 ">
                {isUpdating ? <Spinner /> : 'Zmień hasło'}
            </Button>
        </form>
    )
}

export default ResetPassword
