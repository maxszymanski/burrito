import { Link } from 'react-router-dom'

function NextLinkCart() {
    return (
        <div className="mx-4 mt-2 pb-8 lg:mx-44">
            <Link
                to="/order"
                className="w-full mt-8 text-xl bg-[rgb(51,51,48)] py-3 rounded-xl text-white inline-block text-center "
            >
                Dalej
            </Link>
        </div>
    )
}

export default NextLinkCart
