import CookieBtn from './CookieBtn'

function Cookie() {
    return (
        <div className="cookie fixed animate-spin-slide bottom-0 z-50 w-full bg-gray-700 text-mywhite font-scope">
            <div className="container mx-auto flex-col flex items-center justify-between gap-4  p-4 text-sm lg:justify-evenly lg:flex-row xl:p-6 xl:text-base w-full">
                <div className="space-y-2">
                    <p>
                        Na stronie wykorzystujemy pliki cookies, aby zbierać
                        dane dotyczące ruchu na stronie.
                    </p>
                    <p>
                        Więcej informacji znajdziesz w{' '}
                        <a
                            href="/privacy-polity"
                            className="text-yellow-500 transition-colors duration-300 hover:text-yellow-400 focus:text-myorder focus:outline-none"
                        >
                            polityce prywatności
                        </a>
                        .
                    </p>
                </div>
                <CookieBtn />
            </div>
        </div>
    )
}

export default Cookie
