import { useForm } from 'react-hook-form'
import Button from '../../ui/Button'
import FormRow from '../../ui/FormRow'
import { usePrice } from '../../context/PriceContext'
import { useUser } from '../authentication/useUser'
import LoginLink from '../../ui/LoginLink'

function DeliveryForm({ onReset, storedDeliveryData }) {
    const { register, formState, handleSubmit, reset } = useForm()
    const { isAuthenticated } = useUser()
    const { handleShowForm } = usePrice()
    const { errors } = formState
    const inputClass =
        'w-full h-8 accent-yellow-500 focus:outline-none focus:ring small:h-12 focus:ring-yellow-500 focus:ring-offset-2 placeholder:text-lg px-4 pt-1 placeholder:text-mywhite placeholder:font-scope placeholder:tracking-wide rounded-lg text-mywhite font-scope text-sm small:text-base focus:pt-0 bg-[rgba(138,139,136,0.4)]'

    const onSubmit = (deliveryData) => {
        localStorage.setItem('deliveryData', JSON.stringify(deliveryData))
        reset()
        handleShowForm()

        // Wyczyść dane z formularza lub wykonaj inne działania po zakończeniu
        // np. przekierowanie do kolejnego widoku
    }

    return (
        <div className="py-8 ">
            <form onSubmit={handleSubmit(onSubmit)} className=" ">
                <FormRow error={errors?.name?.message}>
                    <input
                        {...register('name', {
                            required: 'Proszę podać nazwę użytkownika',
                        })}
                        type="text"
                        id="name"
                        placeholder="Imię"
                        className={`${inputClass}  ${
                            errors?.name?.message ? 'focus:ring-red-400' : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow error={errors?.streetUser?.message}>
                    <input
                        {...register('streetUser', {
                            required: 'Proszę podać ulicę i numer domu',
                        })}
                        type="text"
                        id="streetUser"
                        placeholder="Ulica i numer domu"
                        className={`${inputClass}  ${
                            errors?.streetUser?.message
                                ? 'focus:ring-red-400'
                                : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow error={errors?.zipCodeUser?.message}>
                    <input
                        {...register('zipCodeUser', {
                            required: 'Proszę podać kod pocztowy',
                        })}
                        type="text"
                        id="zipCodeUser"
                        placeholder="Kod pocztowy"
                        className={`${inputClass}  ${
                            errors?.zipCodeUser?.message
                                ? 'focus:ring-red-400'
                                : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow error={errors?.cityUser?.message}>
                    <input
                        {...register('cityUser', {
                            required: 'Proszę podać nazwę miejscowość',
                        })}
                        type="text"
                        id="cityUser"
                        placeholder="Miejscowość"
                        className={`${inputClass}  ${
                            errors?.cityUser?.message
                                ? 'focus:ring-red-400'
                                : ''
                        }
                    `}
                    />
                </FormRow>
                <FormRow error={errors?.phoneUser?.message}>
                    <input
                        {...register('phoneUser', {
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
                        type="phoneUser"
                        id="phoneUser"
                        placeholder="Numer telefonu"
                        className={`${inputClass}  ${
                            errors?.phoneUser?.message
                                ? 'focus:ring-red-400'
                                : ''
                        }
                    `}
                    />
                </FormRow>
                <Button type="w-full mt-2 bg-yellow-500">Zapisz</Button>
                {isAuthenticated || storedDeliveryData ? (
                    <Button
                        onClick={onReset}
                        type="w-full mt-4 bg-red-500 focus:bg-red-500"
                    >
                        Anuluj
                    </Button>
                ) : (
                    <>
                        <p className="text-center text-xs py-4 px-8 small:text-sm">
                            Jeśli masz już konto, możesz zalogować się, aby
                            zaoszczędzić czas na wprowadzaniu danych do dostawy.
                        </p>
                        <LoginLink />
                    </>
                )}
            </form>
        </div>
    )
}

export default DeliveryForm
