import { SubmitHandler, useForm } from 'react-hook-form'
import FormRow from '../../ui/FormRow'
import Button from '../../ui/Button'
import usePasswordRecovery from './usePasswordRecovery'
import Spinner from '../../ui/Spinner'

interface ForgotPasswordFormData {
    email: string
}

function ForgotPassword() {
    const { passwordRecovery, isSending } = usePasswordRecovery()
    const { register, formState, handleSubmit } =
        useForm<ForgotPasswordFormData>()
    const { errors } = formState

    const onResetPassword: SubmitHandler<ForgotPasswordFormData> = ({
        email,
    }) => {
        passwordRecovery(email)
    }

    return (
        <form
            className="bg-[#2c2c2b] px-6 py-12 w-full text-mywhite relative rounded-lg max-w-2xl text-center"
            onSubmit={handleSubmit(onResetPassword)}
        >
            <h3 className="text-center text-yellow-500 small:text-5xl text-3xl font-bold px-4 tracking-wider leading-normal small:leading-normal pb-6 ">
                Resetowanie hasła
            </h3>
            <p className="font-muli text-sm pb-8">
                Zapomniałeś swojego hasła? Spokojnie, jesteśmy tutaj, aby Ci
                pomóc. Aby zresetować hasło, podaj nam adres e-mail związany z
                Twoim kontem, a my prześlemy Ci instrukcje resetowania.
            </p>
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
                    placeholder="Adres email"
                    className={`w-full h-8 accent-yellow-500 focus:outline-none focus:ring small:h-12 focus:ring-yellow-500 focus:ring-offset-2 placeholder:text-base px-4 pt-1 placeholder:text-mywhite placeholder:font-scope placeholder:tracking-wide rounded-lg text-mywhite font-scope text-sm small:text-base focus:pt-0 bg-[rgba(138,139,136,0.4)]  ${
                        errors?.email?.message ? 'focus:ring-red-400' : ''
                    }
                    `}
                />
            </FormRow>
            <Button type=" mt-3 px-6">
                {isSending ? <Spinner /> : 'Wyślij'}
            </Button>
        </form>
    )
}

export default ForgotPassword
