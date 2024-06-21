import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'
import FooterLink from '../ui/FooterLink'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

function Contact() {
    return (
        <section className="px-6 lg:container lg:mx-auto text-mywhite w-full pb-24 text-center xl:pb-12 xl:pt-28">
            <Logo />
            <h2 className="text-3xl py-8 text-yellow-500 lg:text-left lg:text-5xl lg:py-16 ">
                Kontakt
            </h2>
            <p className="mb-4 lg:mb-6 lg:text-lg">
                Serdecznie zapraszamy do naszej restauracji Burrito w Krakowie!
                Znajdziecie nas w samym sercu miasta, gdzie serwujemy
                najpyszniejsze burrito i inne meksykańskie specjały.
            </p>
            <div className="py-4  lg:py-8">
                <h3 className="text-xl mb-2 text-yellow-400 lg:text-left lg:text-2xl lg:mb-6 xl:text-3xl">
                    Dane Kontaktowe:
                </h3>
                <div className="lg:flex lg:justify-evenly xl:text-lg">
                    <div>
                        <h4 className="text-lg font-semibold py-4">Adres:</h4>
                        <p>Restauracja Burrito</p>
                        <p>ul. Przykładowa 123</p>
                        <p>31-000 Kraków</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold py-4">Telefon:</h4>
                        <Link
                            className="hover:text-yellow-400 transition-colors duration-300"
                            to="tel:+48 123 456 789"
                        >
                            +48 123 456 789
                        </Link>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold py-4">Email:</h4>
                        <Link
                            className="hover:text-yellow-400 transition-colors duration-300"
                            to="mailto:kontakt@burrito.pl"
                        >
                            kontakt@burrito.pl
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-4 lg:py-8">
                <h3 className="text-xl mb-2 text-yellow-400 lg:text-left lg:text-2xl lg:mb-6 xl:text-3xl">
                    Godziny otwarcia:
                </h3>
                <div className="mt-4 lg:flex lg:items-center lg:justify-evenly xl:text-lg">
                    <p className=" py-0.5">
                        Poniedziałek - Piątek: 11:00 - 22:00
                    </p>
                    <p className="py-0.5">Sobota - Niedziela: 12:00 - 23:00</p>
                </div>
            </div>
            <div className="py-4 lg:py-8">
                <h3 className="text-xl mb-2 text-yellow-400 lg:text-left lg:text-2xl lg:mb-6 xl:text-3xl">
                    Social Media:
                </h3>
                <p className="my-5 text-center lg:text-lg">
                    Bądź na bieżąco z naszymi nowościami i promocjami! Śledź nas
                    na:
                </p>
                <div className="flex items-center justify-evenly small:text-3xl text-2xl  xl:text-4xl  lg:mt-8">
                    <FooterLink to="https://www.facebook.pl">
                        <FaFacebook />
                    </FooterLink>
                    <FooterLink to="https://www.instagram.pl">
                        <FaInstagram />
                    </FooterLink>
                    <FooterLink to="https://www.youtube.pl">
                        <FaYoutube />
                    </FooterLink>
                    <FooterLink to="https://www.tiktok.pl">
                        <FaTiktok />
                    </FooterLink>
                </div>
            </div>
        </section>
    )
}

export default Contact
