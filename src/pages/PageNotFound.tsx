import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <main className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 min-h-screen ">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative pb-8">
                    <div className="absolute">
                        <h2 className="mt-2 text-gray-800 font-bold text-2xl lg:text-4xl">
                            Wygląda na to, że dotarłeś do ślepego zaułka.
                        </h2>
                        <p className="my-6 text-gray-800 texl-lg small:text-xl lg:text-3xl">
                            Przepraszamy za to! Możesz wrócić na stronę główną,
                            aby znaleźć to, czego szukasz.
                        </p>

                        <Link
                            to="/"
                            className=" inline-block sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-yelloww-700 focus:ring-opacity-50 duration-300 transition-colors tracking-wider lg:text-xl"
                        >
                            Zabierz mnie tam!
                        </Link>
                    </div>
                    <div>
                        <img src="images/404-2.webp" />
                    </div>
                </div>
            </div>
            <div>
                <img src="images/404-1.webp" />
            </div>
        </main>
    )
}

export default PageNotFound
