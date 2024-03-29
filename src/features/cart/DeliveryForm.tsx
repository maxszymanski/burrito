import { useForm } from 'react-hook-form'
import Button from '../../ui/Button'
import FormRow from '../../ui/FormRow'

function DeliveryForm() {
    const { register, formState, handleSubmit, reset } = useForm()
    const { errors } = formState
    const inputClass =
        'w-full h-8 accent-yellow-500 focus:outline-none focus:ring small:h-12 focus:ring-yellow-500 focus:ring-offset-2 placeholder:text-lg px-4 pt-1 placeholder:text-mywhite placeholder:font-scope placeholder:tracking-wide rounded-lg text-mywhite font-scope text-sm small:text-base focus:pt-0 bg-[rgba(138,139,136,0.4)]'

    const onSubmit = (deliveryData) => {
        localStorage.setItem('deliveryData', JSON.stringify(deliveryData))
        reset()
        // Wyczyść dane z formularza lub wykonaj inne działania po zakończeniu
        // np. przekierowanie do kolejnego widoku
    }

    return (
        <div>
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
                <Button onClick={() => {}} type="w-full mt-2">
                    Zapisz
                </Button>
            </form>
        </div>
    )
}

export default DeliveryForm
