import { useForm } from 'react-hook-form'
import { UpdatePasswordType } from '../../types/types'
import UpdateUserFormRow from '../../ui/UpdateUserFormRow'
import UserHeader from './UserHeader'
import UserMain from './UserMain'
import Button from '../../ui/Button'
import { useUpdatePassword } from '../authentication/useUpdatePassword'
import Loader from '../../ui/Loader'
import Spinner from '../../ui/Spinner'
import { useState } from 'react'
import { IoMdEyeOff } from 'react-icons/io'
import { LuEye } from 'react-icons/lu'

function UpdatePassword() {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const {
        handleSubmit,
        formState: { errors },
        register,
        getValues,
    } = useForm<UpdatePasswordType>()
    const { updatePassword, isUpdating } = useUpdatePassword()

    const onSubmit = ({ password }: UpdatePasswordType) => {
        updatePassword(password)
    }

    const handleShowPassword = () => {
        setIsShowPassword((show) => !show)
    }

    const inputClass =
        'w-full  accent-yellow-500 focus:outline-none transition-color focus:bg-[rgb(5,5,5,0.1)]  bg-transparent border-b border-yellow-500 rounded-3xl px-8 h-9 small:h-11 xl:h-12'

    if (isUpdating) return <Loader />

    return (
        <section className="text-center  min-h-screen text-mywhite small:text-lg pb-24 small:pb-32 lg:pt-32 lg:ml-12">
            <UserHeader />
            <UserMain>
                <form onSubmit={handleSubmit(onSubmit)}>
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
            </UserMain>
        </section>
    )
}

export default UpdatePassword
