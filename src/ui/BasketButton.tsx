import { BiBasket } from 'react-icons/bi'

function BasketButton({ onClick }) {
    return (
        <button
            className="bg-gradient-to-r from-[#566F2E] to-[#AAA724] rounded-full p-2 md:py-3  md:w-full"
            onClick={onClick}
        >
            <span className="hidden md:block w-full text-2xl tracking-widest  ">
                Dodaj
            </span>
            <BiBasket className="text-mywhite small:text-3xl text-2xl md:hidden" />
        </button>
    )
}

export default BasketButton
