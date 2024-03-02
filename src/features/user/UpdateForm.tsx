import { useForm } from 'react-hook-form'
import UpdateUserFormRow from '../../ui/UpdateUserFormRow'
import Button from '../../ui/Button'
import { useUpdateUser } from '../authentication/useUpdateUser'
import { useUser } from '../authentication/useUser'
import Loader from '../../ui/Loader'

function UpdateForm() {
    const { register, formState, handleSubmit } = useForm()
    const { errors } = formState
    const { updateUser, isUpdating } = useUpdateUser()

    const { user, isLoading } = useUser()
    const { city, phone, street, userName, zipCode, orders } =
        user?.user_metadata || ''

    const onUpdate = (updatedUser) => {
        updateUser(updatedUser)
    }
    if (isUpdating || isLoading) return <Loader />

    return (
        <form onSubmit={handleSubmit(onUpdate)}>
            <UpdateUserFormRow error={errors?.userName?.message} label="Imię">
                <input
                    {...register('userName')}
                    type="text"
                    id="userName"
                    placeholder="Imię"
                    defaultValue={userName}
                    className={`w-full  accent-yellow-500 focus:outline-none transition-color focus:bg-[rgb(5,5,5,0.1)]  bg-transparent border-b border-yellow-500 rounded-3xl px-8 h-8 small:h-10 ${
                        errors?.userName?.message ? 'focus:border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <UpdateUserFormRow
                error={errors?.street?.message}
                label="Ulica i numer domu"
            >
                <input
                    {...register('street')}
                    type="text"
                    id="street"
                    placeholder="Ulica i numer domu"
                    defaultValue={street}
                    className={`w-full  accent-yellow-500 focus:outline-none transition-color focus:bg-[rgb(5,5,5,0.1)]  bg-transparent border-b border-yellow-500 rounded-3xl px-8 h-8 small:h-10 ${
                        errors?.street?.message ? 'focus:border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <UpdateUserFormRow
                error={errors?.zipCode?.message}
                label="Kod pocztowy"
            >
                <input
                    {...register('zipCode')}
                    type="text"
                    id="zipCode"
                    placeholder="Kod pocztowy"
                    defaultValue={zipCode}
                    className={`w-full  accent-yellow-500 focus:outline-none transition-color focus:bg-[rgb(5,5,5,0.1)]  bg-transparent border-b border-yellow-500 rounded-3xl px-8 h-8 small:h-10 ${
                        errors?.zipCode?.message ? 'focus:border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <UpdateUserFormRow
                error={errors?.city?.message}
                label="Miejscowość"
            >
                <input
                    {...register('city')}
                    type="text"
                    id="city"
                    placeholder="Miejscowość"
                    defaultValue={city}
                    className={`w-full  accent-yellow-500 focus:outline-none transition-color focus:bg-[rgb(5,5,5,0.1)]  bg-transparent border-b border-yellow-500 rounded-3xl px-8 h-8 small:h-10 ${
                        errors?.city?.message ? 'focus:border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <UpdateUserFormRow error={errors?.phone?.message} label="Telefon">
                <input
                    {...register('phone', {
                        minLength: {
                            value: 9,
                            message: 'Numer telefonu musi składać się z 9 cyfr',
                        },
                        maxLength: {
                            value: 9,
                            message: 'Numer telefonu musi składać się z 9 cyfr',
                        },
                        pattern: {
                            value: /^\d+$/,
                            message:
                                'Numer telefonu nie może zawierać liter ani znaków specjalnych',
                        },
                    })}
                    type="phone"
                    id="phone"
                    placeholder="Numer telefonu"
                    defaultValue={phone}
                    className={`w-full  accent-yellow-500 focus:outline-none transition-color focus:bg-[rgb(5,5,5,0.1)]  bg-transparent border-b border-yellow-500 rounded-3xl px-8 h-8 small:h-10 ${
                        errors?.phone?.message ? 'focus:border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <Button onClick={() => {}} type=" mt-2 px-6 " disabled={isUpdating}>
                Zapisz
            </Button>
        </form>
    )
}

export default UpdateForm
