import { useEffect, useState } from 'react'
import Logo from '../../ui/Logo'
import { Link, useNavigate } from 'react-router-dom'

function ConfirmSignup() {
    const [timeToRedirect, setTimeToRedirect] = useState(9)
    const navigate = useNavigate()
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeToRedirect((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(intervalId)
                    navigate('/')
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [navigate])
    return (
        <section className="w-full min-h-screen bg-menu-bg-sm bg-cover bg-center xl:bg-cart px-6 py-6  ">
            <div className="text-mywhite lg:container lg:mx-auto lg:w-full xl:text-center">
                <Logo isHidden={false} />
                <h2 className="text-yellow-500 small:text-3xl text-2xl text-center py-12 tracking-wider leading-normal lg:py-16  lg:text-4xl xl:text-5xl xl:mt-12">
                    Rejestracja zakończona pomyślnie!
                </h2>
                <p className="small:text-lg tracking-wider mb-4 leading-relaxed lg:leading-loose lg:text-xl xl:text-2xl">
                    Twoje konto zostało aktywowane. Przekierowanie na stronę
                    główną nastąpi za
                    <span className="text-yellow-500 font-bold">
                        {' '}
                        {timeToRedirect}
                    </span>{' '}
                </p>
                <p className="small:text-lg tracking-wider leading-relaxed lg:leading-loose lg:text-xl xl:text-2xl">
                    Jeśli przekierowanie nie nastąpi automatycznie, kliknij
                    <Link className="text-yellow-500 font-bold" to="/">
                        {' '}
                        tutaj
                    </Link>
                    , aby przejść do strony głównej.
                </p>
            </div>
        </section>
    )
}

export default ConfirmSignup
