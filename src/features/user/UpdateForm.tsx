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
    const { city, phone, street, userName, zipCode, avatar } =
        user?.user_metadata || ''

    const onUpdate = (updatedUser) => {
        updateUser(updatedUser)
    }
    if (isUpdating || isLoading) return <Loader />
    const inputClass =
        'w-full  accent-yellow-500 focus:outline-none transition-color focus:bg-[rgb(5,5,5,0.1)]  bg-transparent border-b border-yellow-500 rounded-3xl px-8 h-9 small:h-11 xl:h-12'

    return (
        <form onSubmit={handleSubmit(onUpdate)}>
            <UpdateUserFormRow error={errors?.avatar?.message} label="Avatar">
                <input
                    {...register('avatar')}
                    type="file"
                    id="avatar"
                    accept="image/*"
                    className={`w-full  accent-yellow-500 focus:outline-none transition-color bg-transparent border-b border-yellow-500 rounded-3xl px-7 h-9 small:h-12 cursor-pointer xl:h-14 ${
                        errors?.avatar?.message ? 'border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <UpdateUserFormRow error={errors?.userName?.message} label="Imię">
                <input
                    {...register('userName', {
                        required: 'Imię użytkownika jest wymagane',
                    })}
                    type="text"
                    id="userName"
                    placeholder="Imię"
                    defaultValue={userName}
                    className={`${inputClass} ${
                        errors?.userName?.message ? 'border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <UpdateUserFormRow
                error={errors?.street?.message}
                label="Ulica i numer domu"
            >
                <input
                    {...register('street', {
                        required: 'Ulica jest wymagana',
                    })}
                    type="text"
                    id="street"
                    placeholder="Ulica i numer domu"
                    defaultValue={street}
                    className={`${inputClass} ${
                        errors?.street?.message ? 'border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <UpdateUserFormRow
                error={errors?.zipCode?.message}
                label="Kod pocztowy"
            >
                <input
                    {...register('zipCode', {
                        required: 'Kod pocztowy jest wymagany',
                    })}
                    type="text"
                    id="zipCode"
                    placeholder="Kod pocztowy"
                    defaultValue={zipCode}
                    className={`${inputClass} ${
                        errors?.zipCode?.message ? 'border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <UpdateUserFormRow
                error={errors?.city?.message}
                label="Miejscowość"
            >
                <input
                    {...register('city', {
                        required: 'Nazwa miejscowości jest wymagana',
                    })}
                    type="text"
                    id="city"
                    placeholder="Miejscowość"
                    defaultValue={city}
                    className={`${inputClass} ${
                        errors?.city?.message ? 'border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>
            <UpdateUserFormRow error={errors?.phone?.message} label="Telefon">
                <input
                    {...register('phone', {
                        required: 'Numer telefonu jest wymagany',
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
                    className={`${inputClass} ${
                        errors?.phone?.message ? 'border-red-500' : ''
                    }
                    `}
                />
            </UpdateUserFormRow>

            <Button type=" mt-2 px-6 " disabled={isUpdating}>
                Zapisz
            </Button>
        </form>
    )
}

export default UpdateForm
