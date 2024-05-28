import { Link, useParams } from 'react-router-dom'

function OrderNotFound() {
    const { orderNumber } = useParams()
    return (
        <section className="px-4 py-6 small:px-6 text-center min-h-screen flex items-center flex-col justify-center bg-[#2c2c2b] gap-6">
            <h3 className="text-3xl">
                Nie znaleziono zamówienia numer <br />
                <span className="text-yellow-400">#{orderNumber}</span>
            </h3>
            <p>Prosimy o podanie poprawnego numeru zamówienia</p>

            <Link
                to="/"
                className="w-full max-w-[200px] text-center block border-2 border-yellow-100 rounded-lg text-yellow-100   transition-colors duration-300 uppercase font-semibold text-sm small:text-xl pb-2 pt-3 tracking-widest font-scope  focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed bg-[rgba(138,139,136,0.4)] hover:bg-[rgba(138,139,136,0.8)]"
            >
                Powrót
            </Link>
        </section>
    )
}

export default OrderNotFound
