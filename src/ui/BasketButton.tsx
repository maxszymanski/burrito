import { BiBasket } from 'react-icons/bi'

function BasketButton({ onClick }) {
    return (
        <button
            className="bg-gradient-to-r from-[#566F2E] to-[#AAA724] rounded-full p-2"
            onClick={onClick}
        >
            <BiBasket className="text-mywhite small:text-3xl text-2xl" />
        </button>
    )
}

export default BasketButton
